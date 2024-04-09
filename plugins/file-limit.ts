import { readdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

export interface LimitFileOptions {
  path: string
  limit?: number
  customFilter?: (fileName: string) => boolean
}

export default function LimitFile(options: LimitFileOptions) {
  return {
    name: 'rollup-plugin-limit-file',
    buildEnd: async () => {
      const { path, limit, customFilter } = options
      const fileNames = await readdir(resolve(path))

      if (typeof limit === 'number' && Number.isInteger(limit)) {
        while (fileNames.length >= limit) {
          const fileName = fileNames.shift()
          if (fileName)
            rm(resolve(path, fileName))
        }
      }

      if (customFilter && typeof customFilter === 'function')
        fileNames.filter(customFilter).forEach(fileName => rm(resolve(path, fileName)))
    },
  }
}
