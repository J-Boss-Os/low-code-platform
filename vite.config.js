import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from 'rollup-plugin-inject';
import commonjs from "rollup-plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), inject({
    "_": "loadsh"
  })],
  build: {
    rollupOptions: {
      external: [
        "_"
      ],
      plugins: [
        commonjs(),
        externalGlobals({
          _: "_",
        }),
      ],
    },
  },
})
