// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// vypočítejme __dirname z import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
