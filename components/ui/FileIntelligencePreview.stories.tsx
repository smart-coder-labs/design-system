import type { Meta, StoryObj } from '@storybook/react';
import { FileIntelligencePreview } from './FileIntelligencePreview';

const meta = {
    title: 'Components/FileIntelligencePreview',
    component: FileIntelligencePreview,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FileIntelligencePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageFile: Story = {
    args: {
        file: {
            name: 'vacation-photo.jpg',
            type: 'image/jpeg',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        },
        intelligence: {
            type: 'JPEG Image',
            size: '2.4 MB',
            dimensions: '4032 × 3024',
            preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
            summary: 'A beautiful landscape photo taken during vacation',
            metadata: {
                'Camera': 'iPhone 15 Pro',
                'Date Taken': 'December 15, 2023',
                'Location': 'Yosemite National Park',
                'ISO': '100',
                'Aperture': 'f/1.8',
            },
        },
        showMetadata: true,
    },
};

export const PDFDocument: Story = {
    args: {
        file: {
            name: 'annual-report-2023.pdf',
            type: 'application/pdf',
        },
        intelligence: {
            type: 'PDF Document',
            size: '1.8 MB',
            summary: 'Annual financial report for fiscal year 2023',
            extractedText: 'Executive Summary: This report presents the financial performance and strategic initiatives undertaken during the fiscal year 2023...',
            metadata: {
                'Pages': '45',
                'Author': 'Finance Department',
                'Created': 'January 5, 2024',
                'Modified': 'January 10, 2024',
            },
        },
        onDownload: () => console.log('Download PDF'),
        onPreview: () => console.log('Preview PDF'),
    },
};

export const VideoFile: Story = {
    args: {
        file: {
            name: 'presentation-recording.mp4',
            type: 'video/mp4',
        },
        intelligence: {
            type: 'MP4 Video',
            size: '125 MB',
            dimensions: '1920 × 1080',
            duration: '15:32',
            summary: 'Quarterly business review presentation recording',
            metadata: {
                'Duration': '15 minutes 32 seconds',
                'Codec': 'H.264',
                'Frame Rate': '30 fps',
                'Bitrate': '8 Mbps',
            },
        },
    },
};

export const CodeFile: Story = {
    args: {
        file: {
            name: 'app.tsx',
            type: 'text/typescript',
        },
        intelligence: {
            type: 'TypeScript',
            size: '12 KB',
            summary: 'Main application component with routing and state management',
            extractedText: 'import React from "react";\nimport { BrowserRouter } from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      {/* App content */}\n    </BrowserRouter>\n  );\n}',
            metadata: {
                'Lines': '245',
                'Language': 'TypeScript',
                'Components': '8',
                'Hooks': '12',
            },
        },
    },
};

export const WithoutIntelligence: Story = {
    args: {
        file: {
            name: 'document.docx',
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
        onDownload: () => console.log('Download file'),
    },
};

export const WithoutMetadata: Story = {
    args: {
        file: {
            name: 'simple-image.png',
            type: 'image/png',
        },
        intelligence: {
            type: 'PNG Image',
            size: '450 KB',
            dimensions: '800 × 600',
            preview: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400',
        },
        showMetadata: false,
    },
};

export const AudioFile: Story = {
    args: {
        file: {
            name: 'podcast-episode-42.mp3',
            type: 'audio/mpeg',
        },
        intelligence: {
            type: 'MP3 Audio',
            size: '45 MB',
            duration: '32:15',
            summary: 'Tech podcast episode discussing AI advancements',
            metadata: {
                'Duration': '32 minutes 15 seconds',
                'Bitrate': '192 kbps',
                'Sample Rate': '44.1 kHz',
                'Artist': 'Tech Talk Podcast',
            },
        },
    },
};
