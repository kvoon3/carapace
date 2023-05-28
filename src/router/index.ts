/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import VueRouter from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

export const Router = new VueRouter({
  mode: 'hash',
  routes,
})
