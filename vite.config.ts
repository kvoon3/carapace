import path from 'node:path'
import process from 'node:process'
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
import Compression from 'unplugin-compression/vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from '@shikijs/markdown-it'
import anchor from 'markdown-it-anchor'
import { name } from './package.json'
import CreateDir from './plugins/create-dir'
import LimitFile from './plugins/file-limit'
import { TimeUnit, genCompactFullDate, isTimeAgo, parseCompactFullDate } from './src/utils/time'

export default defineConfig(({ mode }) => {
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
      cors: true,
    },
    plugins: [
      VueMacros({
        defineProp: {
          edition: 'johnsonEdition',
        },
        plugins: {
          vue: Vue({
            include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/, /\.md$/],
          }),
          // vueJsx: VueJsx(), // if needed
        },
      }),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          'vue-router/composables',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
          {
            consola: [
              'consola',
            ],
          },
        ],
        dts: 'src/auto-imports.d.ts',
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),
      Pages({
        routeBlockLang: 'yaml',
        dirs: [
          {
            dir: 'src/pages',
            baseRoute: '',
            filePattern: '**\/*.*',
          },
        ],
        extensions: ['vue', 'md'],
        exclude: ['**/components/*.vue'],
      }),
      Markdown({
        wrapperClasses: 'prose m-auto text-left',
        async markdownItSetup(md) {
          md.use(await Shiki({
            themes: {
              light: 'vitesse-light',
              dark: 'vitesse-black',
            },
          }))
          md.use(anchor, {
            permalink: anchor.permalink.linkInsideHeader({
              symbol: '#',
              ariaHidden: true,
              placement: 'before',
            }),
          })
        },
      }),
      // `Components` should be after `Markdown`
      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),
      UnoCSS(),
      legacy({
        targets: ['cover 99.5% in CN', 'not IE 11'],
      }),
      Inspector({
        vue: 2,
      }),
      webfontDownload(),
      CreateDir({
        dirs: ['./pkg'],
      }),
      Compression({
        adapter: 'zip',
        source: 'dist',
        outDir: './pkg',
        formatter(source) {
          return `${name}.${genCompactFullDate(new Date())}.${source.adapter}`
        },
      }),
      LimitFile({
        path: './pkg',
        limit: 20,
        customFilter(fileName) {
          const [_, date, __] = fileName.split('.')
          const createTime = parseCompactFullDate(date)
          return isTimeAgo(createTime, { unit: TimeUnit.MONTH, times: 4 })
        },
      }),
    ],
  }
})
