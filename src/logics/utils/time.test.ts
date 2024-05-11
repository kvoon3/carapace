import { describe, expect, it } from 'vitest'
import { genCompactFullDate, parseCompactFullDate } from './time'

describe('time utils', () => {
  it('genCompactFullDate', () => {
    expect(genCompactFullDate(new Date('2001-02-03 04:05:06')))
      .toBe('20010203040506')
  })

  it('parseCompactFullDate', () => {
    expect(parseCompactFullDate('20010203040506'))
      .toEqual(new Date('2001-02-03 04:05:06'))
  })
})
