import React from 'react';
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
export declare const AddressSelector: React.FC<AddressSelectorProps>;
export default AddressSelector;
//# sourceMappingURL=AddressSelector.d.ts.map