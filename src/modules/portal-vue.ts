import type { UserModule } from '~/types'
import PortalVue from 'portal-vue'

export const install: UserModule = ({ Vue }) => {
  Vue.use(PortalVue)
}
