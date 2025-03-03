import type { Component } from 'vue'
import type { RouterOptions } from 'vue-router'
import type { UserModule } from '~/types'
import Vue from 'vue'
import VueRouter from 'vue-router'

interface SetupOptions {
  rootContainer?: string
}

export function setup(
  App: Component,
  routerOptions: RouterOptions,
  fn: UserModule,
  options: SetupOptions = {},
) {
  const {
    rootContainer = '#app',
  } = options

  /**
   * Config
   */
  Vue.config.productionTip = false

  /**
   * Router
   */
  Vue.use(VueRouter)
  const router = new VueRouter(routerOptions)

  /**
   * Provide context for install module and generate vue options
   */
  const ctx = { Vue, router }
  const moduleVueOpts = fn(ctx)

  /**
   * Render
   */
  const app = new Vue({
    router,
    ...moduleVueOpts,
    render: h => h(App),
  })
    .$mount(rootContainer)

  return {
    app,
  }
}
