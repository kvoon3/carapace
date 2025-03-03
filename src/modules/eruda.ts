// @ts-check

import { useScriptTag } from '@vueuse/core'
import { isMobile } from '~/logics/states'

const { load } = useScriptTag(
  'https://cdn.bootcdn.net/ajax/libs/eruda/3.0.0/eruda.min.js',
  () => {
    watchEffect(() => {
      if (isMobile.value) {
        consola.log('isMobile()', isMobile)
        window.eruda.init()
        window.eruda
          ?.get('console')
          ?.config
          .set('displayExtraInfo', true)
      }
      else {
        if (window.eruda._isInit)
          window.eruda.destroy()
      }
    })
  },
  { manual: true },
)

if (!import.meta.env.PROD)
  load()
