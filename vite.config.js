import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from "rollup-plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
