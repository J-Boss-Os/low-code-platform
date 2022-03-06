import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from 'rollup-plugin-inject';
import commonjs from "rollup-plugin-commonjs";
import externalGlobals from "rollup-plugin-external-globals";
import Components from 'unplugin-vue-components/vite';
import {
  AntDesignVueResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), inject({
    "_": "loadsh"
  }), Components({
    resolvers: [
      AntDesignVueResolver(),
      VantResolver(),
    ]
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
