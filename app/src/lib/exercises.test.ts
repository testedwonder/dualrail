import { describe, expect, it } from 'vitest'
import {
  calibrationSteps,
  complexMetrics,
  eigenvectorResult,
  isCalibrationOrder,
  sampleBinary,
} from './exercises'

describe('foundation exercise logic', () => {
  it('converts rectangular components to magnitude and phase', () => {
    expect(complexMetrics(3, 4).magnitude).toBe(5)
    expect(complexMetrics(0, 1).phaseDegrees).toBe(90)
  })

  it('distinguishes eigenvectors from ordinary vectors', () => {
    expect(eigenvectorResult([2, 0, 0, -1], [1, 0])).toEqual({
      transformed: [2, 0],
      isEigenvector: true,
      eigenvalue: 2,
    })
    expect(eigenvectorResult([2, 0, 0, -1], [1, 1]).isEigenvector).toBe(false)
    expect(eigenvectorResult([2, 0, 0, -1], [0, 0]).isEigenvector).toBe(false)
  })

  it('repeats seeded samples exactly', () => {
    expect(sampleBinary(0.75, 100, 17)).toEqual(sampleBinary(0.75, 100, 17))
    const sample = sampleBinary(0.75, 100, 17)
    expect(sample.zero + sample.one).toBe(100)
  })

  it('checks the complete calibration sequence', () => {
    expect(isCalibrationOrder(calibrationSteps)).toBe(true)
    expect(isCalibrationOrder([...calibrationSteps].reverse())).toBe(false)
  })
})