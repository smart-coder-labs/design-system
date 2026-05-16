/* ========================================
   ADDRESS SELECTOR - TYPES
   ======================================== */

export interface PlaceDetails {
    id: string;
    placeId?: string;
    description?: string;
    address?: string;
    lat?: number;
    lng?: number;
    raw?: unknown;
}

export interface AddressSelectorProps {
    onSelect?: (place: PlaceDetails) => void;
    apiKey?: string;
    placeholder?: string;
    className?: string;
    minLength?: number;
}