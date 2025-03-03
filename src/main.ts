import type { UserModule } from './types'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import { useFavicon } from './composition/browser/useFavicon'

import { setup } from './logics/helpers/setup'

import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import 'floating-vue/dist/style.css'
import './styles/global.css'

useFavicon({
  href: {
    light: '/favicon.svg',
    dark: '/favicon-dark.svg',
  },
})

setup(
  App,
  {
    mode: 'hash',
    routes: setupLayouts(generatedRoutes),
  },
  (ctx) => {
    const vueOpts = Object.values(import.meta.glob<{ install: UserModule }>(['./modules/*.ts', './modules/*.js'], { eager: true }))
      // provide context for install module
      .map(i => i.install?.(ctx))
      // merge vue options
      .reduce((accu, cur) => ({
        ...accu,
        ...cur,
      }), {/* default vue options */})
    return vueOpts
  },
)
