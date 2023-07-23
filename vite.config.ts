import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import manifest from './manifest.config'
import sourcemaps from 'rollup-plugin-sourcemaps';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react({
    babel: {
      sourceMaps: 'both'
    }
  }), crx({ manifest })],
  build: {
    rollupOptions: {
      input: ['app.html'],
      plugins: [sourcemaps()],
      output: {
        sourcemap: true,
      }
    },
    sourcemap: true,
  },
})
