import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '/@src': path.resolve(__dirname, '../src'),
    },
  }
})
