import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  consola.log('router', router)
  consola.log('router.beforeEach', router.beforeEach)
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      consola.log('start')
      NProgress.start()
    }
    next()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
