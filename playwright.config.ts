import { defineConfig } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// vytvoření __dirname v ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    testDir: path.join(__dirname, 'tests'),
    timeout: 30 * 1000,
    retries: 1,
    expect: {
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.02,
        },
    },
    snapshotPathTemplate: 'tests/fe/__snapshots__/{testFileDir}/{testFileName}-snapshots/{arg}-{projectName}-{platform}{ext}',
    use: {
        headless: process.env.CI ? true : false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        video: 'retry-with-video',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: {browserName: 'chromium'},
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'},
        },
        {
            name: 'Microsoft Edge',
            use: {
                browserName: 'chromium',
                channel: 'msedge',   // spustí Edge namísto Chrome
            },
        },
    ],
    reporter: [
        ['list'],
        ['json', {outputFile: 'test-results/results.json'}],
        ['html', {outputFolder: 'playwright-report', open: 'never'}],
    ],
    globalSetup: './helpers/globalSetup.ts',
});
