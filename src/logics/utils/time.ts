export enum TimeUnit {
  MONTH = 2592000000,
  DAY = 86400000,
  MINUTE = 60000,
}

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

export function isTimeAgo(date: Date, opt: { now?: Date, unit: TimeUnit, times?: number }) {
  const {
    now = new Date(),
    unit,
    times = 1,
  } = opt

  const diff = now.getTime() - date.getTime()
  return diff > unit * (times)
}
