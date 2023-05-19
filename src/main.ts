import Vue from 'vue'
import VueRouter from 'vue-router'
import { PiniaVuePlugin, createPinia } from 'pinia'
import App from './App.vue'
import { Router } from '~/router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

const vue = new Vue({
  router: Router,
  pinia,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  render: h => h(App),
})
  .$mount('#app')

export { vue }
