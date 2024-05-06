import { useMediaQuery, useSupported } from '@vueuse/core'

export const isTouchSupported = useSupported(() => navigator && ('ontouchstart' in window || navigator.maxTouchPoints > 0))
export const isLgScreen = useMediaQuery('(min-width: 1024px)')
export const isMobile = computed(() => isTouchSupported.value && !isLgScreen.value)
