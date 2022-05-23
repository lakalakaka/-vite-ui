import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = 'xxxxxx';

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
    svgLoader({
      // defaultImport: 'url' // or 'raw'
    }),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ],
  build: {
    // 8 KB
    assetsInlineLimit: 8 * 1024
  }
});
