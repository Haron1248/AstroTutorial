// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(
    process.env.NODE_ENV ?? 'development',
    process.cwd(),
    ''
);

// https://astro.build/config
export default defineConfig({
    base: '/astro',
    server: {
        port: 4321,
        allowedHosts: [`${env.BASE_URL}`],
    }
});
