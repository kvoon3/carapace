import fs from 'node:fs'

export default function DirCreator(options: { dirs: string[] }) {
  return {
    name: 'rollup-plugin-dir-creator',
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
