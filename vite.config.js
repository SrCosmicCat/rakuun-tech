import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

const PWAmanifest = {
  includeAssets: ['favicon.ico'],
  registerType: 'autoUpdate',
  strategies: 'injectManifest',
  srcDir: 'src',
  filename: 'sw.js',
  injectManifest: {
    globPatterns: ['**/*.{js,css,html,png,svg}'], // Archivos a precachear
  },
  workbox: {
    swSrc: 'src/sw.js', // Ruta de tu Service Worker en tu proyecto.
    swDest: 'dist/sw.js', // Dónde se colocará el archivo en producción.
  },
  injectRegister: 'inline', // Inserta automáticamente el registro.
  manifest: {
    name: 'Rakuun Tech',
    short_name: 'Rakuun',
    description: 'Tu tienda de tecnología',
    lang: 'es-MX',
    display_override: ['standalone'],
    display: 'standalone',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    icons: [
      {
        src: 'icon-64-64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'icon-192-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'icon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
    screenshots: [
      {
        src: 'screenshots/screenshot-1.png',
        sizes: '1410x807',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Vista de la tienda',
        description: 'Vista de la tienda en la que se muestran los productos disponibles'
      },
      {
        src: 'screenshots/screenshot-2.png',
        sizes: '1410x807',
        type: 'image/png',
        form_factor: 'tall',
        label: 'Vista de la tienda',
        description: 'Vista de la tienda en la que se muestran los productos disponibles'
      }
    ],
    scope: '/',
    startUrl: '/',
    orientation: 'portrait',
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(PWAmanifest)],
})

