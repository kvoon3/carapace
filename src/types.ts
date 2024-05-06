import type { ComponentOptions } from 'vue'
import type VueRouter from 'vue-router'
import type Vue from 'vue'

export interface UserContext {
  Vue: typeof Vue
  router: VueRouter
}

export type UserModule = <V extends Vue>(ctx: UserContext) => ComponentOptions<V> | void
