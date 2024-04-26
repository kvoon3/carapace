import { isString } from '@antfu/utils'
import { useDark } from '@vueuse/core'

export function useFavicon(opts: {
  href: string | {
    light: string
    dark: string
  }
  force?: boolean // force to remove old link
}) {
  const appendLink = (href: string) => {
    const link = document.createElement('link') as HTMLLinkElement
    link.rel = 'icon'
    link.type = 'image/svg+xml'
    link.href = href
    document.head.appendChild(link)
    return link
  }
  const {
    href,
    force = true,
  } = opts

  const link = ref<HTMLLinkElement | null>(document.querySelector('link[rel~="icon"]'))

  if (force && link.value) {
    document.head.removeChild(link.value)
    link.value = null
  }

  if (!link.value) {
    if (isString(href))
      link.value = appendLink(href)
    else
      link.value = appendLink(useDark().value ? href.dark : href.light)
  }

  return link
}
