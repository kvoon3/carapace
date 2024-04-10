import VueRouter from 'vue-router'
import { router } from '~/router'
import type { UserModule } from '~/types'

export const install: UserModule = ({ Vue }) => {
  Vue.use(VueRouter)
  return {
    router,
  }
}
