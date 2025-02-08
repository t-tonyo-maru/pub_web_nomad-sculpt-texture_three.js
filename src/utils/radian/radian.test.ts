import { describe, it, expect } from 'vitest'
import {
  convertRadianToDegree,
  convertDegreeToRadian
} from '~/utils/radian/radian'

describe('Test: convertDegreeToRadian', () => {
  it('0° => 0[rad]', () => {
    const degree = 0
    const expected = 0
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })

  it('45° => PI/4[rad]', () => {
    const degree = 45
    const expected = Math.PI / 4
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })

  it('90° => PI/2[rad]', () => {
    const degree = 90
    const expected = Math.PI / 2
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })

  it('135° => 3PI/4[rad]', () => {
    const degree = 135
    const expected = Math.PI * (3 / 4)
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })

  it('180° => PI[rad]', () => {
    const degree = 180
    const expected = Math.PI
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })

  it('360° => 2PI[rad]', () => {
    const degree = 360
    const expected = Math.PI * 2
    const result = convertDegreeToRadian(degree)
    expect(result).toBe(expected)
  })
})

describe('Test: convertRadianToDegree', () => {
  it('0[rad] => 0°', () => {
    const radian = 0
    const expected = 0
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })

  it('PI/4[rad] => 45°', () => {
    const radian = Math.PI / 4
    const expected = 45
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })

  it('PI/2[rad] => 90°', () => {
    const radian = Math.PI / 2
    const expected = 90
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })

  it('3PI/4[rad] => 135°', () => {
    const radian = Math.PI * (3 / 4)
    const expected = 135
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })

  it('PI[rad] => 180°', () => {
    const radian = Math.PI
    const expected = 180
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })

  it('2PI[rad] => 360°', () => {
    const radian = Math.PI * 2
    const expected = 360
    const result = convertRadianToDegree(radian)
    expect(result).toBe(expected)
  })
})
