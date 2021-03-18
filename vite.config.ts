import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const BUILD_VERSION = JSON.stringify(process.env.GITHUB_SHA || '__DEV__');

export default defineConfig({
  base: '/cloudemoticon-web/',
  define: {
    BUILD_VERSION,
  },
  plugins: [
    vue(),
    VitePWA(),
  ],
});
