import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default await antfu(
  {},
  unocss.configs.flat,
)
