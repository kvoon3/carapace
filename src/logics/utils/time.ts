export function genCompactFullDate(date: Date): string {
  return [
    date.getFullYear(),
    ...[date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(i => i.toString().padStart(2, '0')),
  ].join('')
}

export function parseCompactFullDate(date: string): Date {
  const year = date.substring(0, 4)
  const month = date.substring(4, 6)
  const day = date.substring(6, 8)
  const hours = date.substring(8, 10)
  const minutes = date.substring(10, 12)
  const seconds = date.substring(12, 14)
  return new Date(+year, +month - 1, +day, +hours, +minutes, +seconds)
}
