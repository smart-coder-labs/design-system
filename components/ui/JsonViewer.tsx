import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

export interface JsonViewerProps {
    /** The JSON data to display */
    data: any;
    /** Whether nested objects/arrays should be expanded by default */
    initiallyExpanded?: boolean;
    /** Number of pixels to indent for each level */
    indentSize?: number;
    /** Optional class name for the container */
    className?: string;
    /** Whether to show the copy button */
    showCopyButton?: boolean;
    /** Maximum height of the container before scrolling */
    maxHeight?: string | number;
}

type DataType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null';

const getDataType = (value: any): DataType => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value as DataType;
};

interface JsonNodeProps {
    name?: string;
    value: any;
    depth: number;
    isLast: boolean;
    indentSize: number;
    initiallyExpanded: boolean;
}

const JsonNode: React.FC<JsonNodeProps> = ({
    name,
    value,
    depth,
    isLast,
    indentSize,
    initiallyExpanded,
}) => {
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
    const type = getDataType(value);
    const isExpandable = type === 'object' || type === 'array';
    const isEmpty = isExpandable && Object.keys(value).length === 0;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const renderValue = (val: any, valType: DataType) => {
        switch (valType) {
            case 'string':
                return <span className="text-[#ce9178]">"{val}"</span>;
            case 'number':
                return <span className="text-[#b5cea8]">{val}</span>;
            case 'boolean':
                return <span className="text-[#569cd6]">{val ? 'true' : 'false'}</span>;
            case 'null':
                return <span className="text-[#569cd6]">null</span>;
            default:
                return null;
        }
    };

    const renderPreview = () => {
        if (type === 'array') {
            return <span className="text-gray-400">Array({value.length})</span>;
        }
        return <span className="text-gray-400">{'{...}'}</span>;
    };

    return (
        <div 
            className="font-mono text-sm leading-6"
            style={{ paddingLeft: depth > 0 ? indentSize : 0 }}
        >
            <div className="flex items-start">
                {/* Toggle Button or Spacer */}
                <div className="w-5 h-6 flex items-center justify-center flex-none mr-1">
                    {isExpandable && !isEmpty && (
                        <button
                            onClick={handleToggle}
                            className="text-gray-400 hover:text-gray-200 transition-colors focus:outline-none"
                        >
                            {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5" />
                            ) : (
                                <ChevronRight className="w-3.5 h-3.5" />
                            )}
                        </button>
                    )}
                </div>

                {/* Key and Value */}
                <div className="flex-1 break-all">
                    {name && (
                        <span className="text-[#9cdcfe] mr-1">
                            "{name}":
                        </span>
                    )}

                    {!isExpandable ? (
                        <>
                            {renderValue(value, type)}
                            {!isLast && <span className="text-gray-400">,</span>}
                        </>
                    ) : (
                        <>
                            <span className="text-[#da70d6]">
                                {type === 'array' ? '[' : '{'}
                            </span>
                            
                            {!isExpanded && !isEmpty && (
                                <>
                                    <button 
                                        onClick={handleToggle}
                                        className="mx-1 hover:bg-white/5 px-1 rounded cursor-pointer"
                                    >
                                        {renderPreview()}
                                    </button>
                                    <span className="text-[#da70d6]">
                                        {type === 'array' ? ']' : '}'}
                                    </span>
                                    {!isLast && <span className="text-gray-400">,</span>}
                                </>
                            )}

                            {isEmpty && (
                                <>
                                    <span className="text-[#da70d6]">
                                        {type === 'array' ? ']' : '}'}
                                    </span>
                                    {!isLast && <span className="text-gray-400">,</span>}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Expanded Content */}
            {isExpandable && isExpanded && !isEmpty && (
                <div>
                    {Object.entries(value).map(([key, val], index, arr) => (
                        <JsonNode
                            key={key}
                            name={type === 'array' ? undefined : key}
                            value={val}
                            depth={depth + 1}
                            isLast={index === arr.length - 1}
                            indentSize={indentSize}
                            initiallyExpanded={initiallyExpanded}
                        />
                    ))}
                    <div 
                        className="pl-6 text-[#da70d6]"
                    >
                        {type === 'array' ? ']' : '}'}
                        {!isLast && <span className="text-gray-400">,</span>}
                    </div>
                </div>
            )}
        </div>
    );
};

export const JsonViewer: React.FC<JsonViewerProps> = ({
    data,
    initiallyExpanded = false,
    indentSize = 20,
    className,
    showCopyButton = true,
    maxHeight,
}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy JSON:', err);
        }
    };

    return (
        <div className={cn(
            "relative rounded-xl border border-border-primary/50 bg-[#1e1e1e] text-white shadow-sm overflow-hidden",
            className
        )}>
            {showCopyButton && (
                <div className="absolute top-2 right-2 z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 bg-[#1e1e1e]/80 backdrop-blur-sm"
                    >
                        {isCopied ? (
                            <Check className="w-4 h-4 text-green-400" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                    </Button>
                </div>
            )}
            
            <div 
                className="p-4 overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                style={{ maxHeight }}
            >
                <JsonNode
                    value={data}
                    depth={0}
                    isLast={true}
                    indentSize={indentSize}
                    initiallyExpanded={initiallyExpanded}
                />
            </div>
        </div>
    );
};
