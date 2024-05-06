import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: {
      vueVersion: 2,
    },
    unocss: true,
    formatters: true,
  },
)
