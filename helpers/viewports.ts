export interface Viewport {
    name: string;
    width: number;
    height: number;
}

export const viewports: Viewport[] = [
    { name: 'Mobile S', width: 375, height: 667 },
    { name: 'Mobile L', width: 414, height: 896 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
];
