import antfu from '@antfu/eslint-config'
import * as depend from 'eslint-plugin-depend'

export default antfu(
  {
    vue: {
      vueVersion: 2,
    },
    unocss: true,
    formatters: true,
  },
  depend.configs['flat/recommended'],
)
