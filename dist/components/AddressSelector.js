import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
async function loadGoogleMaps(apiKey) {
    if (typeof window === 'undefined')
        return;
    if (window.google && window.google.maps)
        return window.google;
    const existing = document.querySelector('script[data-gmaps]');
    if (existing) {
        // wait until loaded
        await new Promise((resolve) => {
            existing.addEventListener('load', () => resolve());
        });
        return window.google;
    }
    const script = document.createElement('script');
    script.setAttribute('data-gmaps', '1');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    await new Promise((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Maps script'));
    });
    return window.google;
}
export const AddressSelector = ({ onSelect, apiKey, placeholder = 'Search address', className = '', minLength = 3 }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [predictions, setPredictions] = useState([]);
    const [active, setActive] = useState(-1);
    const svcRef = useRef(null);
    const placesSvcRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        let mounted = true;
        const key = apiKey;
        if (!key) {
            setError('Google Maps API key not provided. Pass the `apiKey` prop to AddressSelector.');
            return;
        }
        loadGoogleMaps(key)
            .then((g) => {
            if (!mounted)
                return;
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
        if (!loaded || !svcRef.current)
            return;
        if (query.length < minLength) {
            setPredictions([]);
            return;
        }
        let cancelled = false;
        svcRef.current.getPlacePredictions({ input: query }, (res, status) => {
            if (cancelled)
                return;
            setPredictions(res ?? []);
            setActive(-1);
        });
        return () => {
            cancelled = true;
        };
    }, [query, loaded, minLength]);
    const choose = (p) => {
        if (!placesSvcRef.current)
            return;
        placesSvcRef.current.getDetails({ placeId: p.place_id }, (place, status) => {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                console.warn('PlacesService getDetails failed', status);
                onSelect?.({ id: p.place_id, placeId: p.place_id, description: p.description, raw: p });
                return;
            }
            const result = {
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
    const onKeyDown = (e) => {
        if (predictions.length === 0)
            return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((a) => Math.min(a + 1, predictions.length - 1));
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((a) => Math.max(a - 1, 0));
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            if (active >= 0 && active < predictions.length)
                choose(predictions[active]);
        }
        else if (e.key === 'Escape') {
            setPredictions([]);
        }
    };
    useEffect(() => {
        const onClick = (ev) => {
            if (!containerRef.current)
                return;
            if (!containerRef.current.contains(ev.target)) {
                setPredictions([]);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    return (_jsxs("div", { ref: containerRef, className: cn('relative w-full', className), children: [_jsx("input", { type: "search", placeholder: placeholder, value: query, onChange: (e) => setQuery(e.target.value), onKeyDown: onKeyDown, className: "w-full px-3 py-2 rounded-lg border border-border-primary bg-surface-secondary", "aria-autocomplete": "list", "aria-expanded": predictions.length > 0, "aria-owns": "address-selector-list" }), error && _jsx("div", { className: "mt-2 text-sm text-red-600", children: error }), predictions.length > 0 && (_jsx("ul", { id: "address-selector-list", role: "listbox", className: "absolute z-20 left-0 right-0 mt-2 bg-white border border-border-primary rounded-md shadow-lg max-h-64 overflow-auto", children: predictions.map((p, i) => (_jsxs("li", { role: "option", "aria-selected": i === active, className: cn('px-3 py-2 cursor-pointer hover:bg-surface-primary', i === active ? 'bg-surface-primary' : ''), onMouseDown: (ev) => {
                        // prevent input blur
                        ev.preventDefault();
                        choose(p);
                    }, onMouseEnter: () => setActive(i), children: [_jsx("div", { className: "text-sm font-medium", children: p.structured_formatting.main_text }), _jsx("div", { className: "text-xs text-text-tertiary", children: p.structured_formatting.secondary_text ?? p.description })] }, p.place_id))) }))] }));
};
export default AddressSelector;
//# sourceMappingURL=AddressSelector.js.map