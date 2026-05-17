"use client";

import React, { createContext, useContext } from 'react';
import type { SearchInputContextValue } from './SearchInput.types';

const SearchInputContext = createContext<SearchInputContextValue | null>(null);

export function useSearchInputContext() {
    const context = useContext(SearchInputContext);
    if (!context) {
        throw new Error("SearchInput compound components must be used within SearchInput");
    }
    return context;
}

export { SearchInputContext };