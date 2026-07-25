import { defineConfig } from 'vite';

export default defineConfig({
    base: '/3D_Portfolio/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
    },
});

