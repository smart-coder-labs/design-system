# AddressSelector

> **v1.0.20** · stable

An address autocomplete component powered by Google Places API. Provides real-time address suggestions with keyboard navigation and detailed place information retrieval.

## Installation

```bash
import { AddressSelector } from '@/components/ui/AddressSelector';
```

## Basic Usage

```tsx
<AddressSelector
  apiKey="YOUR_GOOGLE_MAPS_API_KEY"
  onSelect={(place) => console.log(place)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | Required | Google Maps API key |
| `onSelect` | `(place: PlaceDetails) => void` | - | Callback when address is selected |
| `placeholder` | `string` | `'Search address'` | Input placeholder text |
| `minLength` | `number` | `3` | Minimum characters before suggestions |
| `className` | `string` | `''` | Additional CSS classes |

### PlaceDetails

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique place identifier |
| `placeId` | `string` | Google Places place ID |
| `description` | `string` | Formatted address description |
| `address` | `string` | Full formatted address |
| `lat` | `number` | Latitude coordinate |
| `lng` | `number` | Longitude coordinate |
| `raw` | `PlaceResult` | Raw Google Places object |

## Examples

### Basic Address Search

```tsx
<AddressSelector
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
  onSelect={(place) => {
    setFormData({
      street: place.address,
      lat: place.lat,
      lng: place.lng
    });
  }}
/>
```

### With Custom Placeholder

```tsx
<AddressSelector
  apiKey="YOUR_API_KEY"
  placeholder="Enter your business address"
  onSelect={handleAddressSelect}
/>
```

### With Early Trigger

```tsx
<AddressSelector
  apiKey="YOUR_API_KEY"
  minLength={1}
  onSelect={handleAddressSelect}
/>
```

## Requirements

- A valid Google Maps API key with Places API enabled
- The API key must have access to the Places library

## Accessibility Notes

- Full keyboard navigation (Arrow keys, Enter, Escape)
- Uses `role="listbox"` and `role="option"` for suggestions
- `aria-expanded` and `aria-owns` attributes for screen readers
- Click outside closes the dropdown automatically