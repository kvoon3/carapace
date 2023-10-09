import type { MaybeRef } from '@vueuse/core'
import { isDark } from '~/utils/theme'

export interface FileNames {
  base?: string | string[]
  light?: string
  dark?: string
}

export interface FilePaths extends FileNames {}

export interface DynamicStyleOptions {
  baseUrl?: string
  fileNames: FileNames
  extensions: string
}

// create an empty linkElement
function createLink(): HTMLLinkElement {
  const theLink = document.createElement('link')
  theLink.rel = 'stylesheet'
  theLink.type = 'text/css'
  return theLink
}

// render linkElement into head tag
function renderLink(el: MaybeRef<HTMLLinkElement>, path?: string) {
  if (path)
    unref(el).href = path

  document.head.appendChild(unref(el))
  return el
}

/**
 * dynamically using css file by render LinkElement and update LinkElement href
 *
 * @category composition
 * @author kvoon
 */
export function useDynamicStyle(options: DynamicStyleOptions) {
  const { baseUrl, fileNames, extensions } = options

  const filePaths: FilePaths = {
    base: undefined,
    light: undefined,
    dark: undefined,
  }

  // Setup fileNames
  if (baseUrl) {
    if (fileNames.base) {
      filePaths.base = Array.isArray(fileNames.base)
        ? fileNames.base.map(b => `${baseUrl}/${b}.${extensions}`)
        : `${baseUrl}/${fileNames.base}.${extensions}`
    }

    if (fileNames.light)
      filePaths.light = `${baseUrl}/${fileNames.light}.${extensions}`

    if (fileNames.dark)
      filePaths.dark = `${baseUrl}/${fileNames.dark}.${extensions}`
  }

  const baseLinkElement = ref<HTMLLinkElement | HTMLLinkElement[]>()
  const themeLinkElement = ref<HTMLLinkElement>()

  /**
   * append base LinkElement
   */
  if (filePaths?.base) {
    if (Array.isArray(filePaths.base))
      baseLinkElement.value = filePaths.base.map(path => unref(renderLink(createLink(), path)))
    else
      baseLinkElement.value = unref(renderLink(createLink(), filePaths.base))
  }

  /**
   * append theme(dark/light) LinkElement and dynamically change theme by watchEffect
   */
  if (filePaths?.light || filePaths?.dark) {
    themeLinkElement.value = unref(renderLink(createLink(), filePaths[isDark.value ? 'dark' : 'light']))

    watchEffect(() => {
      themeLinkElement.value!.href = `${filePaths[isDark.value ? 'dark' : 'light']}`
    })
  }

  return {
    baseLinkElement,
    themeLinkElement,
  }
}
