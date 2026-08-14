import { useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUp,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  Play,
  RotateCcw,
  XCircle,
} from 'lucide-react'
import {
  calibrationSteps,
  complexMetrics,
  eigenvectorResult,
  isCalibrationOrder,
  sampleBinary,
} from '../lib/exercises'

interface ExerciseLabProps {
  exerciseId: string
  documentId: string
  onNavigate: (id: string, anchor?: string) => void
}

interface ExerciseFrameProps {
  title: string
  description: string
  documentId: string
  onNavigate: (id: string, anchor?: string) => void
  onReset: () => void
  children: ReactNode
}

function ExerciseFrame({ title, description, documentId, onNavigate, onReset, children }: ExerciseFrameProps) {
  return (
    <section className="exercise-lab" aria-labelledby="exercise-title">
      <header className="exercise-header">
        <div>
          <span className="exercise-eyebrow"><FlaskConical size={15} /> Interactive check</span>
          <h2 id="exercise-title">{title}</h2>
          <p>{description}</p>
        </div>
        <button type="button" className="exercise-reset" onClick={onReset}>
          <RotateCcw size={15} /> Reset
        </button>
      </header>
      <div className="exercise-body">{children}</div>
      <button
        type="button"
        className="exercise-reading"
        onClick={() => onNavigate(documentId, 'plain-language-meaning')}
      >
        <BookOpen size={15} /> Read the canonical explanation
      </button>
    </section>
  )
}

function Feedback({ correct, children }: { correct: boolean; children: ReactNode }) {
  return (
    <p className={`exercise-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
      {correct ? <CheckCircle2 size={17} /> : <XCircle size={17} />}
      <span>{children}</span>
    </p>
  )
}

const diagnosticQuestions = [
  {
    prompt: 'Which quantity becomes a standard-basis outcome probability?',
    options: ['The amplitude', 'The amplitude magnitude squared', 'The phase angle'],
    answer: 1,
    reviewId: 'knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md',
  },
  {
    prompt: 'Which equation identifies an eigenvector?',
    options: ['Av = lambda v', 'A + v = 0', 'det(A) = v'],
    answer: 0,
    reviewId: 'knowledge/topics/mathematics-and-quantum-foundations/fundamentals/eigenvalues-and-eigenvectors.md',
  },
  {
    prompt: 'What does a unitary gate preserve?',
    options: ['Only real components', 'Vector norm and inner products', 'Every measurement outcome'],
    answer: 1,
    reviewId: 'knowledge/topics/mathematics-and-quantum-foundations/concepts/unitary-evolution-and-quantum-gates.md',
  },
] as const

function FoundationsDiagnostic({ documentId, onNavigate }: Omit<ExerciseLabProps, 'exerciseId'>) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  return (
    <ExerciseFrame
      title="Foundation diagnostic"
      description="Answer from first principles. A miss points to the page that repairs the gap."
      documentId={documentId}
      onNavigate={onNavigate}
      onReset={() => setAnswers({})}
    >
      <div className="diagnostic-list">
        {diagnosticQuestions.map((question, questionIndex) => {
          const selected = answers[questionIndex]
          const answered = selected !== undefined
          const correct = selected === question.answer
          return (
            <fieldset className="diagnostic-question" key={question.prompt}>
              <legend><span>{questionIndex + 1}</span>{question.prompt}</legend>
              <div className="answer-options">
                {question.options.map((option, optionIndex) => (
                  <button
                    type="button"
                    key={option}
                    aria-pressed={selected === optionIndex}
                    onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {answered && (
                <Feedback correct={correct}>
                  {correct ? 'Correct. Keep this link in the chain.' : 'Not yet. Review the concept before moving forward.'}
                  {!correct && (
                    <button type="button" onClick={() => onNavigate(question.reviewId)}>Open review</button>
                  )}
                </Feedback>
              )}
            </fieldset>
          )
        })}
      </div>
    </ExerciseFrame>
  )
}

function ComplexPhaseExplorer({ documentId, onNavigate }: Omit<ExerciseLabProps, 'exerciseId'>) {
  const [real, setReal] = useState(3)
  const [imaginary, setImaginary] = useState(4)
  const [guess, setGuess] = useState('')
  const [checked, setChecked] = useState(false)
  const metrics = complexMetrics(real, imaginary)
  const correct = Math.abs(Number(guess) - metrics.magnitude) < 0.05
  const scale = 14

  function reset() {
    setReal(3)
    setImaginary(4)
    setGuess('')
    setChecked(false)
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    setChecked(true)
  }

  return (
    <ExerciseFrame
      title="Complex phase explorer"
      description="Move a point in the complex plane, then predict its magnitude."
      documentId={documentId}
      onNavigate={onNavigate}
      onReset={reset}
    >
      <div className="explorer-grid">
        <svg className="complex-plane" viewBox="0 0 180 180" role="img" aria-label={`Complex vector ${real} plus ${imaginary} i`}>
          <line x1="10" y1="90" x2="170" y2="90" />
          <line x1="90" y1="10" x2="90" y2="170" />
          <line className="vector-line" x1="90" y1="90" x2={90 + real * scale} y2={90 - imaginary * scale} />
          <circle cx={90 + real * scale} cy={90 - imaginary * scale} r="5" />
          <text x="157" y="84">Re</text><text x="96" y="18">Im</text>
        </svg>
        <div className="exercise-controls">
          <label>Real component<input aria-label="Real component" type="number" min="-5" max="5" value={real} onChange={(event) => { setReal(Number(event.target.value)); setChecked(false) }} /></label>
          <label>Imaginary component<input aria-label="Imaginary component" type="number" min="-5" max="5" value={imaginary} onChange={(event) => { setImaginary(Number(event.target.value)); setChecked(false) }} /></label>
          <dl className="metric-list">
            <div><dt>Number</dt><dd>{real} {imaginary < 0 ? '-' : '+'} {Math.abs(imaginary)}i</dd></div>
            <div><dt>Phase</dt><dd>{metrics.phaseDegrees.toFixed(1)} deg</dd></div>
          </dl>
          <form onSubmit={submit} className="inline-check">
            <label>Predict magnitude<input aria-label="Magnitude prediction" inputMode="decimal" value={guess} onChange={(event) => { setGuess(event.target.value); setChecked(false) }} /></label>
            <button type="submit">Check</button>
          </form>
          {checked && <Feedback correct={correct}>{correct ? `Correct: |z| = ${metrics.magnitude.toFixed(2)}.` : `Use sqrt(a^2 + b^2). Here |z| = ${metrics.magnitude.toFixed(2)}.`}</Feedback>}
        </div>
      </div>
    </ExerciseFrame>
  )
}

const matrixCases = [
  { label: 'Diagonal A, v = (1, 0)', matrix: [2, 0, 0, -1] as [number, number, number, number], vector: [1, 0] as [number, number] },
  { label: 'Diagonal A, v = (1, 1)', matrix: [2, 0, 0, -1] as [number, number, number, number], vector: [1, 1] as [number, number] },
  { label: 'Swap X, v = (1, 1)', matrix: [0, 1, 1, 0] as [number, number, number, number], vector: [1, 1] as [number, number] },
]

function MatrixEigenvectorExplorer({ documentId, onNavigate }: Omit<ExerciseLabProps, 'exerciseId'>) {
  const [caseIndex, setCaseIndex] = useState(0)
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [checked, setChecked] = useState(false)
  const current = matrixCases[caseIndex]
  const result = eigenvectorResult(current.matrix, current.vector)
  const correct = answer === result.isEigenvector

  function reset() { setCaseIndex(0); setAnswer(null); setChecked(false) }

  return (
    <ExerciseFrame title="Matrix and eigenvector explorer" description="Compare v with Av, then decide whether the direction is preserved." documentId={documentId} onNavigate={onNavigate} onReset={reset}>
      <div className="exercise-controls wide">
        <label>Example<select aria-label="Matrix example" value={caseIndex} onChange={(event) => { setCaseIndex(Number(event.target.value)); setAnswer(null); setChecked(false) }}>{matrixCases.map((item, index) => <option key={item.label} value={index}>{item.label}</option>)}</select></label>
        <div className="equation-readout">
          <span>A = [{current.matrix[0]}, {current.matrix[1]}; {current.matrix[2]}, {current.matrix[3]}]</span>
          <span>v = ({current.vector.join(', ')})</span>
          <strong>Av = ({result.transformed.join(', ')})</strong>
        </div>
        <div className="answer-options two">
          <button type="button" aria-pressed={answer === true} onClick={() => { setAnswer(true); setChecked(false) }}>Eigenvector</button>
          <button type="button" aria-pressed={answer === false} onClick={() => { setAnswer(false); setChecked(false) }}>Not an eigenvector</button>
        </div>
        <button type="button" className="primary-exercise-button" disabled={answer === null} onClick={() => setChecked(true)}>Check direction</button>
        {checked && <Feedback correct={correct}>{correct ? result.isEigenvector ? `Correct. Av = ${result.eigenvalue}v.` : 'Correct. Av is not one scalar multiple of v.' : 'Compare component ratios: one scalar must work for the whole vector.'}</Feedback>}
      </div>
    </ExerciseFrame>
  )
}

function MeasurementLab({ documentId, onNavigate }: Omit<ExerciseLabProps, 'exerciseId'>) {
  const [probabilityZero, setProbabilityZero] = useState(0.75)
  const [shots, setShots] = useState(100)
  const [seed, setSeed] = useState(7)
  const [sample, setSample] = useState(() => sampleBinary(0.75, 100, 7))

  function run() { setSample(sampleBinary(probabilityZero, shots, seed)) }
  function reset() { setProbabilityZero(0.75); setShots(100); setSeed(7); setSample(sampleBinary(0.75, 100, 7)) }

  return (
    <ExerciseFrame title="Born-rule measurement lab" description="Compare theoretical amplitude probabilities with deterministic finite samples." documentId={documentId} onNavigate={onNavigate} onReset={reset}>
      <div className="measurement-layout">
        <div className="exercise-controls">
          <label>Probability of 0: {probabilityZero.toFixed(2)}<input aria-label="Probability of zero" type="range" min="0.05" max="0.95" step="0.05" value={probabilityZero} onChange={(event) => setProbabilityZero(Number(event.target.value))} /></label>
          <label>Shots<select aria-label="Measurement shots" value={shots} onChange={(event) => setShots(Number(event.target.value))}><option value="20">20</option><option value="100">100</option><option value="500">500</option></select></label>
          <label>Seed<input aria-label="Sampling seed" type="number" value={seed} onChange={(event) => setSeed(Number(event.target.value))} /></label>
          <button type="button" className="primary-exercise-button" onClick={run}><Play size={15} /> Run sample</button>
        </div>
        <div className="sample-chart" aria-label={`Sample result: ${sample.zero} zeros and ${sample.one} ones`}>
          {([['0', sample.zero, probabilityZero], ['1', sample.one, 1 - probabilityZero]] as const).map(([label, count, probability]) => (
            <div className="sample-row" key={label}>
              <strong>|{label}&gt;</strong>
              <div><span style={{ width: `${count / shots * 100}%` }} /></div>
              <b>{count}</b>
              <small>theory {(probability * 100).toFixed(0)}%</small>
            </div>
          ))}
          <p role="status">Observed zero frequency: {(sample.zero / shots).toFixed(3)}. Same seed and settings reproduce these counts.</p>
        </div>
      </div>
    </ExerciseFrame>
  )
}

const initialCalibrationOrder = [
  calibrationSteps[0], calibrationSteps[1], calibrationSteps[2],
  calibrationSteps[4], calibrationSteps[3], calibrationSteps[5],
]

function CalibrationOrdering({ documentId, onNavigate }: Omit<ExerciseLabProps, 'exerciseId'>) {
  const [order, setOrder] = useState<string[]>(initialCalibrationOrder)
  const [checked, setChecked] = useState(false)
  const correct = isCalibrationOrder(order)

  function move(index: number, direction: -1 | 1) {
    const target = index + direction
    if (target < 0 || target >= order.length) return
    setOrder((current) => {
      const next = [...current]
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
    setChecked(false)
  }

  return (
    <ExerciseFrame title="Gate-to-calibration ordering" description="Put intent, evidence, and promotion in a defensible order." documentId={documentId} onNavigate={onNavigate} onReset={() => { setOrder(initialCalibrationOrder); setChecked(false) }}>
      <ol className="ordering-list">
        {order.map((step, index) => (
          <li key={step}>
            <span>{step}</span>
            <span className="ordering-controls">
              <button type="button" aria-label={`Move ${step} up`} disabled={index === 0} onClick={() => move(index, -1)}><ArrowUp size={15} /></button>
              <button type="button" aria-label={`Move ${step} down`} disabled={index === order.length - 1} onClick={() => move(index, 1)}><ArrowDown size={15} /></button>
            </span>
          </li>
        ))}
      </ol>
      <button type="button" className="primary-exercise-button" onClick={() => setChecked(true)}>Check sequence</button>
      {checked && <Feedback correct={correct}>{correct ? 'Correct. Fit precedes independent validation, and promotion carries the evidence forward.' : 'Not yet. A candidate must be fit before held-out validation, and validation must pass before promotion.'}</Feedback>}
    </ExerciseFrame>
  )
}

export function ExerciseLab({ exerciseId, documentId, onNavigate }: ExerciseLabProps) {
  const props = { documentId, onNavigate }
  if (exerciseId === 'foundations-diagnostic') return <FoundationsDiagnostic {...props} />
  if (exerciseId === 'complex-phase') return <ComplexPhaseExplorer {...props} />
  if (exerciseId === 'matrix-eigenvector') return <MatrixEigenvectorExplorer {...props} />
  if (exerciseId === 'measurement-lab') return <MeasurementLab {...props} />
  if (exerciseId === 'gate-calibration-order') return <CalibrationOrdering {...props} />
  return null
}