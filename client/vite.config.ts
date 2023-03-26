/// <reference types="vitest" />
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: `${path.resolve(__dirname, './src/assets')}`,
      components: `${path.resolve(__dirname, './src/components')}`,
      config: `${path.resolve(__dirname, './src/config')}`,
      definations: `${path.resolve(__dirname, './src/definations')}`,
      hooks: `${path.resolve(__dirname, './src/hooks')}`,
      layout: `${path.resolve(__dirname, './src/layout')}`,
      navigation: `${path.resolve(__dirname, './src/navigation')}`,
      pages: `${path.resolve(__dirname, './src/pages')}`,
      styles: `${path.resolve(__dirname, './src/styles')}`,
      utils: `${path.resolve(__dirname, './src/utils')}`,
    },
  },
});
