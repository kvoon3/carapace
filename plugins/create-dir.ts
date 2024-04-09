import fs from 'node:fs'

export default function CreateDir(options: { dirs: string[] }) {
  return {
    name: 'rollup-plugin-create-dir',
    buildStart() {
      const { dirs } = options
      dirs.forEach((dir) => {
        try {
          if (!fs.existsSync(dir))
            fs.mkdirSync(dir)
        }
        catch (err) {
          console.error(err)
        }
      })
    },
  }
}
