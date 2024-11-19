import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(PWAmanifest)],
})

const PWAmanifest = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Rakuun Tech',
    short_name: 'Rakuun',
    description: 'Tu tienda de tecnología',
    icons: [
      {
        src: "windows11/Square44x44Logo.targetsize-256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      },
      
    ],
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    startUrl: '/',
    orientation: 'portrait',
  }
}
