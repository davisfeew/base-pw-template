import { defineConfig } from '@playwright/test';
import { resolve } from 'path';

export default defineConfig({
    testDir: resolve(__dirname, './tests'),
    timeout: 30 * 1000,
    retries: 0,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retry-with-video'
    },
    reporter: [
        ['list'],
        ['json', { outputFile: 'test-results/results.json' }],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ],
    globalSetup: './helpers/globalSetup.ts',
});