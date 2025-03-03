import type { UserModule } from '~/types'
import { createPinia, PiniaVuePlugin } from 'pinia'

export const install: UserModule = ({ Vue }) => {
  Vue.use(PiniaVuePlugin)
  const pinia = createPinia()
  return {
    pinia,
  }
}
