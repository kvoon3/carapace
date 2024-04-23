import antfu from '@antfu/eslint-config'
import format from 'eslint-plugin-format'
import markdown from 'eslint-plugin-markdown'

export default antfu(
  {
    vue: {
      vueVersion: 2,
    },
    unocss: true,
    formatters: true,
  },
  // use Prettier to format CSS
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': [
        'error',
        {
          parser: 'css',
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },
  /**
   * https://github.com/eslint/eslint-plugin-markdown
   */
  {
    // 1. Add the plugin
    plugins: {
      markdown,
    },
  },
  {
    // 2. Enable the Markdown processor for all .md files.
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
)
