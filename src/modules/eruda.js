import { useScriptTag } from '@vueuse/core'

// @ts-check

const { load } = useScriptTag(
  'https://cdn.bootcdn.net/ajax/libs/eruda/3.0.0/eruda.min.js',
  /**
   * on script tag loaded.
   *
   * @param {HTMLScriptElement} el
   */
  (el) => {
    window.eruda.init()
    window.eruda
      .get('console')
      .config.set('displayExtraInfo', true)
  },
  { manual: true },
)

load()
