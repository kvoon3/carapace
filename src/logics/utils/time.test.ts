import { describe, expect, it } from 'vitest'
import { TimeUnit, genCompactFullDate, isTimeAgo, parseCompactFullDate } from './time'

describe('time utils', () => {
  it('genCompactFullDate', () => {
    expect(genCompactFullDate(new Date('2001-02-03 04:05:06')))
      .toBe('20010203040506')
  })

  it('parseCompactFullDate', () => {
    expect(parseCompactFullDate('20010203040506'))
      .toEqual(new Date('2001-02-03 04:05:06'))
  })

  it('isTimeAgo', () => {
    expect(
      isTimeAgo(
        new Date('2001-02-03 04:05:06'),
        {
          now: new Date('2001-02-05 04:05:07'),
          unit: TimeUnit.DAY,
          times: 2,
        },
      ),
    )
      .toBe(true)

    expect(
      isTimeAgo(
        new Date('2001-02-03 04:05:06'),
        {
          now: new Date('2000-02-05 04:05:07'),
          unit: TimeUnit.MONTH,
          times: 12,
        },
      ),
    )
      .toBe(false)
  })
})
