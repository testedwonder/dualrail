import { useEffect, useRef, useState } from 'react'
import { Atom, BookOpen, RotateCcw } from 'lucide-react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { dualRailState, formatSignedAmplitude } from '../lib/dualRail'
import { VerificationBadge } from './VerificationBadge'

interface DualRailLabProps {
  onNavigate: (id: string) => void
}

interface SceneObjects {
  amplitudeA: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>
  amplitudeB: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>
  haloA: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
  haloB: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
  phaseMarker: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>
  phaseLine: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>
  coherence: THREE.Mesh<THREE.TubeGeometry, THREE.MeshStandardMaterial>
  render: () => void
}

const presets = [
  { label: '|1,0>', theta: 0, phase: 0 },
  { label: 'Balanced +', theta: 90, phase: 0 },
  { label: 'Balanced −', theta: 90, phase: 180 },
  { label: '|0,1>', theta: 180, phase: 0 },
]

const modeA = new THREE.Vector3(-1.75, 0.15, 0)
const modeB = new THREE.Vector3(1.75, 0.15, 0)
const modeMidpoint = modeA.clone().add(modeB).multiplyScalar(0.5)
const modeLabelAAnchor = modeA.clone().add(new THREE.Vector3(0, 1.42, 0))
const modeLabelBAnchor = modeB.clone().add(new THREE.Vector3(0, 1.42, 0))

function makeMode(color: number, position: THREE.Vector3) {
  const group = new THREE.Group()
  group.position.copy(position)

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.08, 0.095, 18, 96),
    new THREE.MeshStandardMaterial({ color, metalness: 0.28, roughness: 0.3 }),
  )
  group.add(ring)

  const innerRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.83, 0.018, 10, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.38 }),
  )
  group.add(innerRing)

  const points = []
  for (let index = 0; index < 36; index += 1) {
    const angle = index / 36 * Math.PI * 2
    points.push(Math.cos(angle) * 1.08, Math.sin(angle) * 1.08, 0.04)
  }
  const pointGeometry = new THREE.BufferGeometry()
  pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
  group.add(new THREE.Points(
    pointGeometry,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.72 }),
  ))

  return group
}

export function DualRailLab({ onNavigate }: DualRailLabProps) {
  const [theta, setTheta] = useState(90)
  const [phase, setPhase] = useState(0)
  const [sceneError, setSceneError] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const modeLabelARef = useRef<HTMLDivElement>(null)
  const modeLabelBRef = useRef<HTMLDivElement>(null)
  const objectsRef = useRef<SceneObjects | null>(null)
  const state = dualRailState(theta, phase)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = sceneRef.current
    const modeLabelA = modeLabelARef.current
    const modeLabelB = modeLabelBRef.current
    if (!canvas || !container || !modeLabelA || !modeLabelB) return
    const sceneContainer = container
    const modeLabels = [
      [modeLabelA, modeLabelAAnchor],
      [modeLabelB, modeLabelBAnchor],
    ] as const
    if (typeof WebGLRenderingContext === 'undefined') {
      setSceneError('The state math remains available; this environment does not expose WebGL.')
      return
    }

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    } catch {
      setSceneError('The state math remains available; the 3D renderer could not start.')
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xeef3f0)
    scene.fog = new THREE.Fog(0xeef3f0, 8.5, 15)

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(1.0, 2.65, 8.3)

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.minDistance = 6.2
    controls.maxDistance = 11
    controls.minPolarAngle = Math.PI * 0.25
    controls.maxPolarAngle = Math.PI * 0.72
    controls.target.copy(modeMidpoint)

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8ca59b, 2.25))
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6)
    keyLight.position.set(4, 6, 7)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0xffb59f, 1.1)
    rimLight.position.set(-5, 1, 3)
    scene.add(rimLight)

    scene.add(makeMode(0x177a70, modeA), makeMode(0xd05e47, modeB))

    const amplitudeA = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 48, 32),
      new THREE.MeshStandardMaterial({ color: 0x27a89a, emissive: 0x0b4b44, emissiveIntensity: 1.25, transparent: true, opacity: 0.9, roughness: 0.22 }),
    )
    amplitudeA.position.copy(modeA)
    scene.add(amplitudeA)

    const amplitudeB = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 48, 32),
      new THREE.MeshStandardMaterial({ color: 0xe4775e, emissive: 0x6b2419, emissiveIntensity: 1.15, transparent: true, opacity: 0.9, roughness: 0.22 }),
    )
    amplitudeB.position.copy(modeB)
    scene.add(amplitudeB)

    const haloA = new THREE.Mesh(
      new THREE.SphereGeometry(0.79, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0x34b9a9, transparent: true, opacity: 0.16, depthWrite: false }),
    )
    haloA.position.copy(modeA)
    scene.add(haloA)
    const haloB = new THREE.Mesh(
      new THREE.SphereGeometry(0.79, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0xec8268, transparent: true, opacity: 0.16, depthWrite: false }),
    )
    haloB.position.copy(modeB)
    scene.add(haloB)

    const coherenceCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.72, 0.15, -0.03),
      new THREE.Vector3(0, 0.72, -0.28),
      new THREE.Vector3(0.72, 0.15, -0.03),
    ])
    const coherence = new THREE.Mesh(
      new THREE.TubeGeometry(coherenceCurve, 48, 0.035, 10, false),
      new THREE.MeshStandardMaterial({ color: 0xc29429, emissive: 0x6b4b08, emissiveIntensity: 0.7, transparent: true, opacity: 0.5 }),
    )
    scene.add(coherence)

    const phaseMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 24, 16),
      new THREE.MeshStandardMaterial({ color: 0xffce5d, emissive: 0x8f5b00, emissiveIntensity: 1.4 }),
    )
    scene.add(phaseMarker)
    const phaseLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([modeB, modeB]),
      new THREE.LineBasicMaterial({ color: 0xb78312, transparent: true, opacity: 0.78 }),
    )
    scene.add(phaseLine)

    const particlePositions = []
    for (let index = 0; index < 110; index += 1) {
      const x = Math.sin(index * 12.9898) * 4.8
      const y = (Math.cos(index * 7.233) + 1) * 1.8 - 1.25
      const z = Math.sin(index * 3.771) * 3.2 - 1.8
      particlePositions.push(x, y, z)
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3))
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x64857a, size: 0.022, transparent: true, opacity: 0.25 }),
    )
    scene.add(particles)

    const projectedAnchor = new THREE.Vector3()
    function positionModeLabel(label: HTMLDivElement, anchor: THREE.Vector3) {
      projectedAnchor.copy(anchor).project(camera)
      label.style.setProperty('--mode-label-x', `${(projectedAnchor.x * 0.5 + 0.5) * sceneContainer.clientWidth}px`)
      label.style.setProperty('--mode-label-y', `${(-projectedAnchor.y * 0.5 + 0.5) * sceneContainer.clientHeight}px`)
      label.style.visibility = projectedAnchor.z >= -1 && projectedAnchor.z <= 1 ? 'visible' : 'hidden'
    }
    function renderScene() {
      renderer.render(scene, camera)
      for (const [label, anchor] of modeLabels) positionModeLabel(label, anchor)
    }

    objectsRef.current = {
      amplitudeA,
      amplitudeB,
      haloA,
      haloB,
      phaseMarker,
      phaseLine,
      coherence,
      render: renderScene,
    }
    sceneContainer.dataset.rendererReady = 'true'

    function resize() {
      const width = sceneContainer.clientWidth
      const height = sceneContainer.clientHeight
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(sceneContainer)
    resize()
    controls.update()
    renderScene()

    let animationFrame = 0
    const startedAt = performance.now()
    function render(now: number) {
      const elapsed = (now - startedAt) / 1000
      const pulse = 1 + Math.sin(elapsed * 2.1) * 0.025
      for (const object of [amplitudeA, amplitudeB, haloA, haloB]) {
        const baseScale = Number(object.userData.baseScale ?? 1)
        object.scale.setScalar(baseScale * pulse)
      }
      particles.rotation.y = elapsed * 0.012
      controls.update()
      renderScene()
      animationFrame = requestAnimationFrame(render)
    }
    animationFrame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      controls.dispose()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          object.geometry.dispose()
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
      objectsRef.current = null
      delete sceneContainer.dataset.rendererReady
    }
  }, [])

  useEffect(() => {
    const objects = objectsRef.current
    if (!objects) return
    const scaleA = 0.18 + Math.sqrt(state.probabilityA) * 0.88
    const scaleB = 0.18 + Math.sqrt(state.probabilityB) * 0.88
    objects.amplitudeA.userData.baseScale = scaleA
    objects.amplitudeB.userData.baseScale = scaleB
    objects.haloA.userData.baseScale = scaleA * 1.08
    objects.haloB.userData.baseScale = scaleB * 1.08
    objects.amplitudeA.material.opacity = 0.16 + state.probabilityA * 0.8
    objects.amplitudeB.material.opacity = 0.16 + state.probabilityB * 0.8
    objects.haloA.material.opacity = 0.04 + state.probabilityA * 0.17
    objects.haloB.material.opacity = 0.04 + state.probabilityB * 0.17

    const phaseRadians = state.phaseDegrees * Math.PI / 180
    const marker = new THREE.Vector3(
      modeB.x + Math.cos(phaseRadians) * 0.78,
      modeB.y + Math.sin(phaseRadians) * 0.78,
      0.12,
    )
    objects.phaseMarker.position.copy(marker)
    objects.phaseMarker.visible = state.probabilityB > 0.002
    objects.phaseLine.visible = state.probabilityB > 0.002
    objects.phaseLine.geometry.setFromPoints([modeB, marker])
    objects.coherence.material.opacity = 0.08 + Math.sqrt(state.probabilityA * state.probabilityB) * 0.92
    objects.render()
  }, [state])

  function applyPreset(preset: (typeof presets)[number]) {
    setTheta(preset.theta)
    setPhase(preset.phase)
  }

  function reset() {
    setTheta(90)
    setPhase(0)
  }

  return (
    <main className="dual-rail-lab-view">
      <div className="lab-scene" ref={sceneRef}>
        <canvas ref={canvasRef} className="lab-canvas" role="img" aria-label="Three-dimensional dual-rail state visualization" />
        {sceneError && <p className="lab-renderer-fallback" role="status">{sceneError}</p>}
        <div ref={modeLabelARef} className="mode-label mode-label-a"><span>Mode A</span><strong>{(state.probabilityA * 100).toFixed(1)}%</strong></div>
        <div ref={modeLabelBRef} className="mode-label mode-label-b"><span>Mode B</span><strong>{(state.probabilityB * 100).toFixed(1)}%</strong></div>
        <div className="lab-scene-caption"><span>Coherent single-excitation state</span><b>State-space view · not hardware geometry</b></div>
      </div>

      <aside className="lab-control-band" aria-label="Dual-rail state controls">
        <header className="lab-header">
          <div className="lab-header-meta"><span className="eyebrow"><Atom size={14} /> Interactive state lab</span><VerificationBadge scope="lab" /></div>
          <h1>Dual-rail<br />{' '}state space</h1>
          <p>Explore how population and relative phase shape one excitation across two modes.</p>
        </header>

        <div className="lab-presets" aria-label="State presets">
          {presets.map((preset) => (
            <button
              type="button"
              key={preset.label}
              className={theta === preset.theta && state.phaseDegrees === dualRailState(preset.theta, preset.phase).phaseDegrees ? 'active' : ''}
              onClick={() => applyPreset(preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="lab-equation" aria-live="polite">
          <span>|ψ⟩ = α|1,0⟩ + β|0,1⟩</span>
          <code>α = {state.alpha.toFixed(3)}</code>
          <code>β = {formatSignedAmplitude(state.betaReal, state.betaImaginary)}</code>
        </div>

        <div className="lab-sliders">
          <label>
            <span>Population angle θ <b>{state.thetaDegrees.toFixed(0)}°</b></span>
            <input aria-label="Population angle" type="range" min="0" max="180" step="1" value={theta} onChange={(event) => setTheta(Number(event.target.value))} />
          </label>
          <label>
            <span>Relative phase φ <b>{state.phaseDegrees.toFixed(0)}°</b></span>
            <input aria-label="Relative phase" type="range" min="-180" max="180" step="1" value={state.phaseDegrees} onChange={(event) => setPhase(Number(event.target.value))} />
          </label>
        </div>

        <dl className="lab-probabilities">
          <div><dt>P(1,0)</dt><dd>{state.probabilityA.toFixed(3)}</dd></div>
          <div><dt>P(0,1)</dt><dd>{state.probabilityB.toFixed(3)}</dd></div>
          <div><dt>Total</dt><dd>{(state.probabilityA + state.probabilityB).toFixed(3)}</dd></div>
        </dl>

        <div className="lab-actions">
          <button type="button" onClick={reset}><RotateCcw size={15} /> Reset</button>
          <button type="button" onClick={() => onNavigate('knowledge/topics/dual-rail-qubits/fundamentals/quantum-state-and-fock-notation.md')}><BookOpen size={15} /> State notation</button>
          <button type="button" onClick={() => onNavigate('knowledge/topics/mathematics-and-quantum-foundations/concepts/quantum-measurement-and-born-rule.md')}><BookOpen size={15} /> Born rule</button>
        </div>
      </aside>
    </main>
  )
}