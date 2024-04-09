import type { ComponentOptions } from 'vue'
import type { VueConstructor } from 'vue/types/vue'
import type VueRouter from 'vue-router'

export interface UserContext {
  Vue: VueConstructor
  router: VueRouter
}

export type UserModule = <V extends Vue>(ctx: UserContext) => ComponentOptions<V> | void
