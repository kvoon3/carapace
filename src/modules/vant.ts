import Vant from 'vant'
import type { UserModule } from '~/types'
import 'vant/lib/index.less'

export const install: UserModule = ({ Vue }) => {
  Vue.use(Vant)
}
