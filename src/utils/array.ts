export function moveMatchToEnd<T>(array: T[], finder: (item: T) => boolean) {
  const idx = array.findIndex(finder)
  array.push(array.splice(idx, 1)[0])
}
