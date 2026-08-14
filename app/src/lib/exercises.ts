export interface ComplexMetrics {
  magnitude: number
  phaseDegrees: number
}

export interface BinarySample {
  zero: number
  one: number
}

export interface EigenvectorResult {
  transformed: [number, number]
  isEigenvector: boolean
  eigenvalue: number | null
}

export const calibrationSteps = [
  'Name the intended operation',
  'Map intent to physical controls',
  'Measure the device response',
  'Fit a candidate setting',
  'Validate held-out behavior',
  'Promote with evidence',
] as const

export function complexMetrics(real: number, imaginary: number): ComplexMetrics {
  return {
    magnitude: Math.hypot(real, imaginary),
    phaseDegrees: Math.atan2(imaginary, real) * 180 / Math.PI,
  }
}

export function eigenvectorResult(
  matrix: [number, number, number, number],
  vector: [number, number],
): EigenvectorResult {
  const [a, b, c, d] = matrix
  const [x, y] = vector
  const transformed: [number, number] = [a * x + b * y, c * x + d * y]
  if (x === 0 && y === 0) return { transformed, isEigenvector: false, eigenvalue: null }

  const crossProduct = x * transformed[1] - y * transformed[0]
  if (Math.abs(crossProduct) > 1e-9) return { transformed, isEigenvector: false, eigenvalue: null }
  const eigenvalue = Math.abs(x) > 1e-9 ? transformed[0] / x : transformed[1] / y
  return { transformed, isEigenvector: true, eigenvalue }
}

function seededRandom(seed: number) {
  let state = Math.trunc(seed) >>> 0
  return () => {
    state = (1664525 * state + 1013904223) >>> 0
    return state / 4294967296
  }
}

export function sampleBinary(probabilityZero: number, shots: number, seed: number): BinarySample {
  if (probabilityZero < 0 || probabilityZero > 1) throw new Error('Probability must be between 0 and 1.')
  if (!Number.isInteger(shots) || shots < 1) throw new Error('Shots must be a positive integer.')
  const random = seededRandom(seed)
  let zero = 0
  for (let shot = 0; shot < shots; shot += 1) {
    if (random() < probabilityZero) zero += 1
  }
  return { zero, one: shots - zero }
}

export function isCalibrationOrder(order: readonly string[]) {
  return order.length === calibrationSteps.length
    && order.every((step, index) => step === calibrationSteps[index])
}