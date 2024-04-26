import { isString } from '@antfu/utils'
import { useDark } from '@vueuse/core'

interface HrefTheme {
  light: string
  dark: string
  mode?: 'immediate' | 'onload'
}

export interface UseFaviconOptions {
  href: HrefTheme | string
}

export function useFavicon(opts: UseFaviconOptions) {
  /**
   * Remove favicon
   */
  const removeLink = () => {
    let link = document.querySelector('link[rel~="icon"]')
    if (link) {
      document.head.removeChild(link)
      link = null
    }
  }

  /**
   * Append favicon link and remove old favicon
   */
  const appendLink = (href: string) => {
    removeLink()

    const link = document.createElement('link') as HTMLLinkElement
    link.rel = 'icon'
    link.type = 'image/svg+xml'
    link.href = href
    document.head.appendChild(link)
    return link
  }

  /**
   * Append favicon link according to theme and remove old favicon
   */
  const appendLinkWithTheme = (href: HrefTheme) => {
    removeLink()

    const { dark, light } = href

    return appendLink(useDark().value ? dark : light)
  }

  const { href } = opts

  const link = ref<HTMLLinkElement | null>(document.querySelector('link[rel~="icon"]'))

  if (isString(href)) {
    link.value = appendLink(href)
  }
  else {
    const {
      mode = 'onload',
    } = href

    if (mode === 'onload')
      appendLinkWithTheme(href)
    else if (href.mode === 'immediate')
      watchEffect(() => appendLinkWithTheme(href))
  }

  return link
}
