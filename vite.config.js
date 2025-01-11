import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/components/my-component.js',
      name: 'MyLitLibrary',
      fileName: (format) => `my-lit-library.${format}.js`
    },
    rollupOptions: {
      external: /^lit/
    }
  },
});
