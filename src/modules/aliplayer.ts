import { useScriptTag } from '@vueuse/core'
import { useDynamicStyle } from '~/composition/theme'

useDynamicStyle({
  baseUrl: 'https://g.alicdn.com/de/prismplayer/2.15.2/skins/default',
  fileNames: {
    base: 'aliplayer-min',
  },
  extensions: 'css',
})

useScriptTag(
  'https://g.alicdn.com/de/prismplayer/2.15.2/aliplayer-h5-min.js',
  /**
   * on script tag loaded.
   *
   * @param {HTMLScriptElement} el
   */
  (el) => {},
)
