/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import inspect from 'vite-plugin-inspect';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = 'xxxxxx';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    svgLoader({
      // defaultImport: 'url' // or 'raw'
    }),
    // viteEslint(),
    // viteStylelint({
    //   // 对某些文件排除检查
    //   exclude: /windicss|node_modules/
    // }),
    inspect(),
    // 添加UnoCSS插件
    Unocss()
  ],
  build: {
    rollupOptions,
    sourcemap: true, // 输出单独 source文件
    minify: 'terser',
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'viteUI',
      fileName: 'vite-ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife']
    },
    // 8 KB
    assetsInlineLimit: 8 * 1024
  },
  optimizeDeps: {
    // 将所有的 .vue 文件作为扫描入口
    // entries: ['**/*.vue'],
    // 配置为一个字符串数组，将 `lodash-es` 和 `vue`两个包强制进行预构建
    // include: ['lodash-es', 'vue']
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
