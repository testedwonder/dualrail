import { describe, expect, it } from 'vitest'
import { dualRailState, formatSignedAmplitude, normalizePhaseDegrees } from './dualRail'

describe('dual-rail state parameterization', () => {
  it('maps the basis endpoints to one occupied rail', () => {
    expect(dualRailState(0, 0)).toMatchObject({ alpha: 1, probabilityA: 1, probabilityB: 0 })
    const railB = dualRailState(180, 0)
    expect(railB.alpha).toBeCloseTo(0)
    expect(railB.probabilityA).toBeCloseTo(0)
    expect(railB.probabilityB).toBeCloseTo(1)
  })

  it('creates a balanced normalized state', () => {
    const state = dualRailState(90, 0)
    expect(state.alpha).toBeCloseTo(1 / Math.sqrt(2))
    expect(state.betaReal).toBeCloseTo(1 / Math.sqrt(2))
    expect(state.betaImaginary).toBeCloseTo(0)
    expect(state.probabilityA + state.probabilityB).toBeCloseTo(1)
  })

  it('changes relative phase without changing rail probabilities', () => {
    const positive = dualRailState(90, 90)
    const negative = dualRailState(90, -90)
    expect(positive.probabilityB).toBeCloseTo(negative.probabilityB)
    expect(positive.betaReal).toBeCloseTo(0)
    expect(positive.betaImaginary).toBeCloseTo(1 / Math.sqrt(2))
    expect(negative.betaImaginary).toBeCloseTo(-1 / Math.sqrt(2))
  })

  it('clamps population angle and wraps phase', () => {
    expect(dualRailState(-20, 540).thetaDegrees).toBe(0)
    expect(dualRailState(220, 540).thetaDegrees).toBe(180)
    expect(normalizePhaseDegrees(540)).toBe(-180)
    expect(normalizePhaseDegrees(360)).toBe(0)
  })

  it('formats complex amplitudes without negative zero', () => {
    expect(formatSignedAmplitude(-0, -0)).toBe('0.000 + 0.000i')
    expect(formatSignedAmplitude(0.5, -0.25)).toBe('0.500 - 0.250i')
  })
})