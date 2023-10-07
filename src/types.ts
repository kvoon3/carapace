import type { ComponentOptions } from 'vue'
import type { VueConstructor } from 'vue/types/vue'

export interface UserContext {
  Vue: VueConstructor
}

export type UserModule = <V extends Vue>(ctx: UserContext) => ComponentOptions<V> | void
