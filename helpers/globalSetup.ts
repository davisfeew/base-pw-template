import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

async function globalSetup(config: FullConfig) {
    dotenv.config();
    console.log('✅ env file loaded');
}

export default globalSetup;
