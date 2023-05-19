import VueRouter from 'vue-router'
import { routes } from './routes'

export const Router = new VueRouter({
  mode: 'hash',
  routes,
})
