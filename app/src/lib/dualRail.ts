export interface DualRailState {
  thetaDegrees: number
  phaseDegrees: number
  alpha: number
  betaReal: number
  betaImaginary: number
  probabilityA: number
  probabilityB: number
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value))
}

export function normalizePhaseDegrees(value: number) {
  const wrapped = ((value + 180) % 360 + 360) % 360 - 180
  return Object.is(wrapped, -0) ? 0 : wrapped
}

export function dualRailState(thetaDegrees: number, phaseDegrees: number): DualRailState {
  const theta = clamp(thetaDegrees, 0, 180)
  const phase = normalizePhaseDegrees(phaseDegrees)
  const halfThetaRadians = theta * Math.PI / 360
  const phaseRadians = phase * Math.PI / 180
  const alpha = Math.cos(halfThetaRadians)
  const betaMagnitude = Math.sin(halfThetaRadians)

  return {
    thetaDegrees: theta,
    phaseDegrees: phase,
    alpha,
    betaReal: betaMagnitude * Math.cos(phaseRadians),
    betaImaginary: betaMagnitude * Math.sin(phaseRadians),
    probabilityA: alpha ** 2,
    probabilityB: betaMagnitude ** 2,
  }
}

export function formatSignedAmplitude(real: number, imaginary: number) {
  const roundedReal = Math.abs(real) < 0.0005 ? 0 : real
  const roundedImaginary = Math.abs(imaginary) < 0.0005 ? 0 : imaginary
  const sign = roundedImaginary < 0 ? '-' : '+'
  return `${roundedReal.toFixed(3)} ${sign} ${Math.abs(roundedImaginary).toFixed(3)}i`
}