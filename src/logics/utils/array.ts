export function sortToLast<T>(array: T[], finder: (item: T) => boolean) {
  const idx = array.findIndex(finder)
  array.push(array.splice(idx, 1)[0])
}

export function sortToFirst<T>(array: T[], finder: (item: T) => boolean) {
  const idx = array.findIndex(finder)
  array.unshift(array.splice(idx, 1)[0])
}

export function sortToIndex<T>(array: T[], finder: (item: T) => boolean, index: number) {
  const idx = array.findIndex(finder)
  array.splice(idx, 1)
  array.splice(index, 0, array[idx])
}
