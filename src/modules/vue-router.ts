import VueRouter from 'vue-router'
import { Router } from '~/router'
import type { UserModule } from '~/types'

export const install: UserModule = ({ Vue }) => {
  Vue.use(VueRouter)
  return {
    router: Router,
  }
}
