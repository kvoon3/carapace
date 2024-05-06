import { PiniaVuePlugin, createPinia } from 'pinia'
import type { UserModule } from '~/types'

export const install: UserModule = ({ Vue }) => {
  Vue.use(PiniaVuePlugin)
  const pinia = createPinia()
  return {
    pinia,
  }
}
