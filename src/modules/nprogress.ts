import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path)
      NProgress.start()

    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
