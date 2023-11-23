import Vue from 'vue'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

Vue.config.productionTip = false

const vueOptions = Object.values(import.meta.glob<{ install: UserModule }>(['./modules/*.ts', './modules/*.js'], { eager: true }))
  .map(i => i.install?.({
    Vue,
  }))
  .reduce((accu, cur) => ({
    ...accu,
    ...cur,
  }), {/* default vue options */})

consola.info('vueOptions', vueOptions)

const vue = new Vue({
  ...vueOptions,
  render: h => h(App),
})
  .$mount('#app')

export { vue }
