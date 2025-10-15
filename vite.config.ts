import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Plugin to copy demo HTML files to dist after build
function copyDemoFiles() {
  return {
    name: 'copy-demo-files',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      
      // Ensure dist directory exists
      try {
        mkdirSync(distDir, { recursive: true })
      } catch (e) {
        // Directory already exists
      }
      
      // Copy demo.html as index.html for Vercel deployment
      try {
        copyFileSync(
          resolve(__dirname, 'public', 'demo.html'),
          resolve(distDir, 'index.html')
        )
        console.log('✓ Copied demo.html to dist/index.html')
      } catch (e) {
        console.error('Failed to copy demo.html:', e)
      }
      
      // Copy test.html if it exists
      try {
        const testHtmlSource = resolve(__dirname, 'dist', 'test.html')
        const testHtmlDest = resolve(distDir, 'test.html')
        copyFileSync(testHtmlSource, testHtmlDest)
        console.log('✓ Copied test.html to dist/')
      } catch (e) {
        // File might not exist yet, that's okay
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    copyDemoFiles(),
  ],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'CC360Sidebar',
      fileName: 'cc360-sidebar',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'cc360-sidebar.js',
        assetFileNames: 'cc360-sidebar.[ext]'
      }
    }
  }
})