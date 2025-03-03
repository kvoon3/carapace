import type { UserModule } from '~/types'
import FloatingVue from 'floating-vue'

export const install: UserModule = ({ Vue }) => {
  Vue.use(FloatingVue)
}
