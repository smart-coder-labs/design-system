interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}


interface ImageCarouselProps {
    images: CarouselImage[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    effect?: 'slide' | 'fade';
    className?: string;
    height?: string | number;
}
