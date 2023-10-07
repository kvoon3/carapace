import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/dist/vite'
import UnoCSS from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import Inspector from 'vite-plugin-vue-inspector'

// OR vite-plugin-vue-inspector

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      copyPublicDir: true,
      cssTarget: 'chrome49',
      emptyOutDir: true,
    },
    preview: {
      host: '192.168.0.153',
      port: 4000,
      cors: true,
    },
    plugins: [
      VueMacros({
        defineProp: {
          edition: 'johnsonEdition',
        },
        plugins: {
          vue: Vue({
            include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
          }),
          // vueJsx: VueJsx(), // if needed
        },
      }),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          'vue-router',
          'vue-router/composables',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
      }),
      UnoCSS(),
      legacy({
        targets: ['cover 99.5% in CN', 'not IE 11'],
      }),
      Inspector({
        vue: 2,
      }),
      Pages({
        dirs: [
          {
            dir: 'src/pages',
            baseRoute: '',
            filePattern: '**\/*.*',
          },
        ],
        exclude: ['**/components/*.vue'],
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),
    ],
  }
})
