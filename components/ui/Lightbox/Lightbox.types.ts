interface LightboxImage {
    src: string;
    alt?: string;
    caption?: string;
}


interface LightboxProps {
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
    onIndexChange?: (index: number) => void;
    className?: string;
}
