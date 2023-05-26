import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // ...
  presets: [
    presetUno(),
    presetAttributify({ /* preset options */ }),
    presetIcons({ /* options */ }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
