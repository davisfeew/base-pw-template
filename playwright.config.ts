// playwright.config.ts
import {defineConfig} from '@playwright/test';
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    testDir: resolve(__dirname, './tests'),
    timeout: 30 * 1000,
    retries: 0,
    expect: {
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.02,
        },
    },
    snapshotPathTemplate: 'tests/__snapshots__/{testFileDir}/{testFileName}-snapshots/{arg}-{projectName}-{platform}{ext}',
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        video: 'retry-with-video',
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
