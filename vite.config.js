import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(PWAmanifest)],
})

const PWAmanifest = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Rakuun Tech',
    short_name: 'Rakuun',
    description: 'Tu tienda de tecnología',
    // icons: [
      
    // ],
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    startUrl: '/',
    orientation: 'portrait-primary',
  }
}
