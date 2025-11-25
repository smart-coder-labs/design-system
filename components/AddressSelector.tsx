import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

type Prediction = google.maps.places.AutocompletePrediction;

async function loadGoogleMaps(apiKey: string) {
  if (typeof window === 'undefined') return;
  if ((window as any).google && (window as any).google.maps) return (window as any).google;

  const existing = document.querySelector('script[data-gmaps]');
  if (existing) {
    // wait until loaded
    await new Promise<void>((resolve) => {
      (existing as HTMLScriptElement).addEventListener('load', () => resolve());
    });
    return (window as any).google;
  }

  const script = document.createElement('script');
  script.setAttribute('data-gmaps', '1');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  await new Promise<void>((resolve, reject) => {
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps script'));
  });

  return (window as any).google;
}

export interface PlaceDetails {
  id: string;
  placeId?: string;
  description?: string;
  address?: string;
  lat?: number;
  lng?: number;
  raw?: any;
}

export interface AddressSelectorProps {
  /** onSelect fires when the user chooses a place (place details provided) */
  onSelect?: (place: PlaceDetails) => void;
  /** optional API key (if not provided component will try window.__GMAPS_API_KEY__) */
  apiKey?: string;
  placeholder?: string;
  className?: string;
  /** minimum characters before querying */
  minLength?: number;
}

export const AddressSelector: React.FC<AddressSelectorProps> = ({ onSelect, apiKey, placeholder = 'Search address', className = '', minLength = 3 }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [active, setActive] = useState<number>(-1);
  const svcRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesSvcRef = useRef<google.maps.places.PlacesService | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const key = apiKey;
    if (!key) {
      setError('Google Maps API key not provided. Pass the `apiKey` prop to AddressSelector.');
      return;
    }

    loadGoogleMaps(key)
      .then((g) => {
        if (!mounted) return;
        svcRef.current = new g.maps.places.AutocompleteService();
        // create a dummy div for PlacesService
        const dummy = document.createElement('div');
        placesSvcRef.current = new g.maps.places.PlacesService(dummy);
        setLoaded(true);
      })
      .catch((err) => {
        console.error(err);
        setError(String(err?.message ?? err));
      });

    return () => {
      mounted = false;
    };
  }, [apiKey]);

  useEffect(() => {
    if (!loaded || !svcRef.current) return;
    if (query.length < minLength) {
      setPredictions([]);
      return;
    }

    let cancelled = false;
    svcRef.current.getPlacePredictions({ input: query }, (res) => {
      if (cancelled) return;
      setPredictions(res ?? []);
      setActive(-1);
    });

    return () => {
      cancelled = true;
    };
  }, [query, loaded, minLength]);

  const choose = (p: Prediction) => {
    if (!placesSvcRef.current) return;
    placesSvcRef.current.getDetails({ placeId: p.place_id }, (place, status) => {
      if (status !== (window as any).google.maps.places.PlacesServiceStatus.OK) {
        console.warn('PlacesService getDetails failed', status);
        onSelect?.({ id: p.place_id, placeId: p.place_id, description: p.description, raw: p });
        return;
      }
      const result: PlaceDetails = {
        id: p.place_id,
        placeId: p.place_id,
        description: p.description,
        address: place?.formatted_address,
        raw: place,
      };
      if (place?.geometry?.location) {
        result.lat = place.geometry.location.lat();
        result.lng = place.geometry.location.lng();
      }
      setQuery(place?.formatted_address ?? p.description ?? '');
      setPredictions([]);
      onSelect?.(result);
    });
  };

  // keyboard navigation
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (predictions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, predictions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active >= 0 && active < predictions.length) choose(predictions[active]);
    } else if (e.key === 'Escape') {
      setPredictions([]);
    }
  };

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(ev.target as Node)) {
        setPredictions([]);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full px-3 py-2 rounded-lg border border-border-primary bg-surface-secondary"
        aria-autocomplete="list"
        aria-expanded={predictions.length > 0}
        aria-owns="address-selector-list"
      />

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}

      {predictions.length > 0 && (
        <ul id="address-selector-list" role="listbox" className="absolute z-20 left-0 right-0 mt-2 bg-white border border-border-primary rounded-md shadow-lg max-h-64 overflow-auto">
          {predictions.map((p, i) => (
            <li
              key={p.place_id}
              role="option"
              aria-selected={i === active}
              className={cn(
                'px-3 py-2 cursor-pointer hover:bg-surface-primary',
                i === active ? 'bg-surface-primary' : ''
              )}
              onMouseDown={(ev) => {
                // prevent input blur
                ev.preventDefault();
                choose(p);
              }}
              onMouseEnter={() => setActive(i)}
            >
              <div className="text-sm font-medium">{p.structured_formatting.main_text}</div>
              <div className="text-xs text-text-tertiary">{p.structured_formatting.secondary_text ?? p.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressSelector;
