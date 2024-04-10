import PortalVue from 'portal-vue'
import type { UserModule } from '~/types'

export const install: UserModule = ({ Vue }) => {
  Vue.use(PortalVue)
}
