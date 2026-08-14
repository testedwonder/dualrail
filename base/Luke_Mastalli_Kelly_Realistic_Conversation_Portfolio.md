---
title: Realistic Conversation Portfolio for Luke Mastalli-Kelly
kind: simulated-conversation-set
status: draft
research_date: 2026-08-14
privacy: private interview preparation; no personal contact information
simulation_notice: every line attributed to Luke is invented practice dialogue
source_files:
  - Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md
  - DWave_Application_and_Study_Materials.md
---

# Realistic conversation portfolio for Luke Mastalli-Kelly

> **Simulation notice:** Luke Mastalli-Kelly did not say any of the dialogue below. Every line labeled **Luke (simulated)** is invented practice material. The questions model technical functions that a hiring manager with his public background could reasonably test. They do not predict his wording, opinions, private architecture, or interview plan.

## Purpose

This file is a rehearsal environment, not a script to memorize. It models a technical hiring conversation in which:

- Luke may know both the physics and the software consequences;
- a surface-level quantum answer receives a follow-up;
- a production-software answer must remain tied to physical evidence;
- the candidate is expected to distinguish direct experience from analogy;
- a correction is useful information, not an interview failure;
- some questions cannot be answered from public sources.

The evidence model for Luke is in the companion [public evidence portfolio](Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md).

## How to use this file

1. Read the setup and answer Luke's first question aloud without looking at Vi's response.
2. Compare the structure of your answer, not its exact words.
3. Let the follow-up interrupt you. Do not finish a prepared speech after the question has changed.
4. Replace every bracketed personal-evidence prompt with a true example before rehearsal.
5. Stop an answer when the claim is complete. Luke can ask for depth.
6. Never quote a simulated Luke response as evidence about D-Wave.

## Evidence basis

| Key | Supports | Does not support |
| --- | --- | --- |
| E1 | Luke's public physics, software, and project-contribution profile | Private preferences, management style, or internal ownership |
| E2 | The live role's focus on core software, calibration, protocol integration, automation, debugging, testing, and mentorship | The exact interview loop or reporting line |
| E3 | The dual-rail measurement result and its error categories | Assigning the whole experiment to Luke personally |
| E4 | The SWS CZ result, calibration procedure, error structure, nonlinear long-depth behavior, and explicit software credit | Claiming Luke invented or calibrated the gate |
| E5 | Public QCDL, AquSim, RTCF, QED, and EDH concepts | D-Wave's private implementation or Luke's ownership of those products |
| E6 | Vi's resume, project descriptions, experience boundaries, and prepared evidence | Any unrecorded personal anecdote or hardware experience |

## Conversation 1: Background without a project-name avalanche

### Setup

This is a plausible opening after introductions. The purpose is to establish one coherent through-line and leave room for Luke to choose the next branch.

**Evidence basis:** [E1][E2][E6]

### Conversation

**Luke (simulated):** Thanks for taking the time. Give me the version of your background that is most relevant to this team.

**Vi:** I am a software engineer with about five years of production experience around regulated laboratory systems. That work taught me to debug across software, instruments, communications, and operational workflows, where a technically plausible result still is not enough if nobody can trace how it was produced.

Alongside that, I moved deliberately into quantum software. I taught Qiskit, built Ariadion as a modular compiler, runtime, and simulator platform, and built smaller research systems where provenance and independent checks were part of the result. The common thread is that I like turning scientific intent into software that other people can inspect and trust.

My boundary is direct superconducting-hardware operation. I have not calibrated cavities or an RF chain. What makes this role attractive is that the software side is already familiar to me, while the device-specific layer is exactly where I want to deepen.

**Luke (simulated):** You named several projects. Which one best proves you can contribute here rather than simply that you can build quantum demos?

**Vi:** Ariadion is the broadest systems evidence. The point is not that it controls hardware. It does not. The relevant part is that I had to define contracts among semantic operations, compilation, scheduling, execution, simulation, traces, and release artifacts. I also had to make disagreements visible rather than letting one layer silently reinterpret another.

For this role, the transferable skill is maintaining meaning across boundaries. A physicist's protocol, a compiled representation, a controller, and an analysis pipeline cannot each use a slightly different definition of the experiment.

**Luke (simulated):** Four hundred sixty-one tests is a number. Tell me about a failure those tests exposed or a design decision they forced.

**Vi:** The truthful answer needs one concrete incident, not another count. [Personal evidence needed: insert one verified Ariadion defect or design reversal, including the failing invariant, the observed evidence, and the fix. Do not invent this during the interview.]

The general pattern I can defend now is that schedule-circuit integrity and backend parity were explicit contracts. But I would want to give you a real failure from the repository rather than turn a test category into a story that did not happen.

**Luke (simulated):** Good. I would rather hear a smaller real example than a polished composite.

### What this tests

- Can Vi organize her history around one capability?
- Can she distinguish software architecture evidence from QPU-control experience?
- Does she have one concrete failure story behind the test count?

### Failure mode

Listing Mastermind, Ariadion, Artemis, the security study, teaching, and Clinisys in equal detail leaves Luke to infer relevance. The stronger shape is: direct production evidence, one quantum system, one honest boundary.

## Conversation 2: Dual rail from first principles

### Setup

Luke's public work makes a shallow "one photon in two cavities" answer unlikely to be the end of the topic. This branch tests whether Vi can explain the encoding, then preserve the distinctions that make it useful.

**Evidence basis:** [E1][E3][E4]

### Conversation

**Luke (simulated):** Explain the dual-rail cavity qubit to me as if I were a software engineer who remembers linear algebra but not cavity physics.

**Vi:** Take two modes, A and B, and restrict the valid logical states to one excitation total. One logical basis state has the excitation in A and the other has it in B:

```text
|0L> = |1,0>
|1L> = |0,1>
```

A general logical state is a coherent superposition of those two locations. The useful error property is that single-photon loss sends either basis component to `|0,0>`, which is outside the one-excitation code space. If the hardware can check total occupation without revealing the logical superposition, it can flag the loss location as an erasure.

**Luke (simulated):** You said "flag the loss." Did you correct the qubit?

**Vi:** No. I only described detection. Correction needs a larger code, a decoder, and some way to reconstruct or replace protected information. The dual rail turns a dominant loss event into better information for that higher layer; it does not make the error disappear.

**Luke (simulated):** Is every leakage event an erasure?

**Vi:** No. Leakage means the state left the chosen computational subspace. It becomes an erasure for the decoder only if the system detects and localizes it reliably enough to report a known fault. Undetected leakage is not magically an erasure.

**Luke (simulated):** Then why not just postselect all the losses away?

**Vi:** That is useful for experiments and benchmarking, but it is not a complete fault-tolerant strategy. Postselection discards runs. A running error-corrected computation needs a defined response: branch, reset, replace, update syndrome information, or decode with the known location.

**Luke (simulated):** What is the software consequence of the encoding?

**Vi:** Error information has to remain structured. The stack must not flatten valid outcomes, detected erasures, assignment failures, and residual logical errors into one scalar. The compiler, controller, simulator, result schema, and decoder need compatible semantics for when checks happen and what each outcome means.

**Luke (simulated):** What would falsify your simple model?

**Vi:** If the check disturbed the relative amplitudes or phase even when no loss occurred, or if ordinary codespace states were often assigned as vacuum, then "detect loss without learning the logical state" would not hold at the required fidelity. I would look at conditional state or process measurements and the full assignment matrix, not only the erasure count.

### What this tests

- Code space versus a two-level physical component
- Detection versus correction
- Leakage versus a localized erasure
- Postselection versus real-time handling
- Physical claim versus measurement that could disconfirm it

### Strong stopping point

After the software consequence, stop. Do not volunteer gate metrics unless Luke asks.

## Conversation 3: The repeated-CZ question turns into a design review

### Setup

Vi wants to ask about the paper's unresolved long-depth behavior. A realistic hiring manager may answer briefly, protect private details, or turn the question back into an architecture problem.

**Evidence basis:** [E1][E2][E4][E6]

### Conversation

**Vi:** The long repeated-CZ data showed nonlinear degradation, and the paper proposed calibration drift or coupling-transmon frequency fluctuation as possible causes. Without getting into private implementation details, how does the production stack help distinguish stale calibration state from a device that is changing during the run?

**Luke (simulated):** Before I answer, tell me how you would distinguish them.

**Vi:** I would preserve two evidence streams and keep them time-aligned.

First is software lineage: the exact device, waveform, code version, analysis version, and connected calibration records selected for the run. That can expose an old or incompatible record.

Second is physical time series: a direct frequency measurement or a validated proxy before, during, and after the stressed sequence, with shot order and timestamps preserved.

If lineage shows an old value while the physical target is now stable at a new value, and one fresh calibration restores behavior and stays good, that supports a stale-state explanation. If a fresh calibration becomes wrong again on the same timescale and the monitor moves with it, that supports a changing device or shared reference. Both can happen in sequence.

**Luke (simulated):** You built a dependency graph. Why is that not enough?

**Vi:** A graph only knows modeled dependencies and observed updates. It can invalidate descendants after a known parent change. It cannot detect an unmodeled physical change unless a monitor or health check turns that change into an event.

**Luke (simulated):** Suppose your frequency monitor is flat, but the long sequence still bends quadratically.

**Vi:** Then I would not call the device stable without checking the monitor's sensitivity and timescale. If the monitor is valid, I would widen the hypothesis set: coherent phase accumulation, waveform distortion, heating, classifier drift, an analysis-version effect, or another hidden device parameter.

I would try to separate sequence depth from elapsed time. Hold elapsed time roughly fixed while changing depth, then hold depth fixed while changing idle time or acquisition order. A depth-dependent effect that does not track time looks different from drift during averaging.

**Luke (simulated):** What do you persist from that investigation?

**Vi:** Raw observations and their order, the immutable run identity, all calibration versions, monitor data, analysis code, fit residuals and uncertainty, each hypothesis, each intervention, and the decision. I would not persist only the winning explanation because the rejected alternatives are part of why the decision is credible.

**Luke (simulated):** And when do you stop the run?

**Vi:** That has to be a declared policy, not an improvised reaction. I would stop or segment when a required parent becomes invalid, a monitor crosses a predeclared bound, the device snapshot changes incompatibly, or evidence needed to interpret the run disappears. For exploratory work, the policy may continue while labeling segments. For a production calibration, I would fail closed sooner.

### What this tests

- Observation versus diagnosis
- Known invalidation versus unknown drift
- Time versus sequence-depth confounding
- Evidence preservation
- Operational policy rather than a conceptual graph alone

### What remains unknown

No public source establishes D-Wave's actual validity model, calibration registry, monitor cadence, stop policy, or root cause for the nonlinear behavior.

## Conversation 4: A physicist's notebook has to become shared software

### Setup

The live role explicitly bridges physicists and core software. This branch tests whether Vi can productionize a changing protocol without freezing research or accepting an unreviewable notebook as infrastructure.

**Evidence basis:** [E1][E2][E6]

### Conversation

**Luke (simulated):** A physicist has a notebook that calibrates a new operation. It works for their device today. Three other people need it next month. What do you do first?

**Vi:** I would not begin by rewriting the notebook into a service. First I would identify the scientific contract:

- what parameter it estimates;
- required inputs, units, and device identity;
- raw observations it consumes;
- model and assumptions;
- outputs and uncertainty;
- conditions that disqualify the result;
- which earlier calibrations it assumes;
- what independent behavior authorizes promotion.

Then I would capture one known run as a replay fixture before changing structure.

**Luke (simulated):** The protocol changes every two days. Your schema will become the bottleneck.

**Vi:** Then the stable boundary should be smaller. I would version an experiment envelope and result envelope while allowing protocol-specific payloads behind capability declarations. Identity, units, provenance, raw-data references, lifecycle state, and failure behavior should be stable. The sweep and fit internals can evolve more freely.

**Luke (simulated):** That sounds like a platform project. We need the calibration next month.

**Vi:** I would stage it.

1. Freeze a replayable command and immutable output for the current protocol.
2. Separate pure fit logic from acquisition side effects.
3. Add input validation, units, and explicit failure states.
4. Run candidate and current methods side by side on bounded hardware checks.
5. Add dependency and promotion automation only where repeated use justifies it.

The first useful increment is a reproducible tool, not a universal framework.

**Luke (simulated):** The fit improves its objective, but it lands on the maximum allowed pulse amplitude. Promote it?

**Vi:** No, not from that evidence alone. A boundary optimum can mean the search range is wrong, the model is weak, or the hardware is asking for an unsafe setting. I would mark the candidate as a boundary hit, preserve the fit, and require a physics decision or a safely expanded experiment before promotion.

**Luke (simulated):** The physicist says they always inspect the plot and know when it is good.

**Vi:** I would ask them to teach me what they see. Some of that judgment may become explicit residual checks, shape checks, or counterexamples. Some may remain human review. The production improvement is that the system records the evidence and the reviewer decision, not that software pretends every scientific judgment can be automated.

### What this tests

- Contract discovery before rewriting
- Stable envelope versus changing protocol
- Incremental productionization
- Boundary-hit handling
- Respect for expert judgment without leaving it invisible

### Candidate evidence to prepare

Prepare one true example where Vi converted a manual or exploratory workflow into repeatable software. The Clinisys instrument-integration work or NSF scientific-software work is likely stronger here than an abstract framework description.

## Conversation 5: Testing when QPU time is scarce

### Setup

The role requires unit, integration, and end-to-end testing around a physical system. This branch tests whether Vi understands both the value and the limits of simulation.

**Evidence basis:** [E2][E3][E4][E6]

### Conversation

**Luke (simulated):** How would you test calibration and experiment software if you cannot put every pull request on the QPU?

**Vi:** I would organize tests by the invariant and use the cheapest environment capable of falsifying it.

- Pure tests for units, parameter bounds, waveform construction, graph invalidation, serializers, fit functions, and classifiers.
- Property tests for periodic phase, equivalent program forms, monotonic transformations, and graph behavior.
- Golden replays from immutable raw traces to expected classifications and fits.
- Simulator integration for compiler, timing, branching, and structured error propagation.
- Fault injection for timeouts, stale parents, partial acquisition, schema mismatch, and concurrent promotion.
- Bounded hardware checks for assumptions that depend on the device, RF path, or real noise.
- Canary comparison before a candidate becomes the default.

**Luke (simulated):** Your simulator agrees with your compiler because the same team wrote both. Why should I trust that?

**Vi:** Agreement is weaker when implementations share assumptions. I would use independent fixtures or a second path for the highest-risk semantics. At minimum, golden controller traces should be reviewed against the experiment specification, not regenerated silently from the same code under test. Where practical, use a small analytical case or separately implemented reference.

That is a lesson from my own quantum work: backend parity is useful, but independence determines how much evidence the agreement provides.

**Luke (simulated):** Give me one thing simulation cannot authorize.

**Vi:** That a calibration remains valid on the current device. A simulator can test the policy and inject drift, but it cannot prove the real coupler, readout chain, thermal state, or control electronics match the model now.

**Luke (simulated):** What belongs in an end-to-end hardware test?

**Vi:** The smallest safe path that crosses the real boundaries at risk: acquire under a captured device state, classify outcomes, fit a candidate, validate it on a held-out operation, and prove that a failed candidate leaves the last-known-good state intact. I would not use a broad hardware test to replace cheap deterministic coverage.

**Luke (simulated):** What if a replay changes after a numerical-library upgrade by one part in a billion?

**Vi:** First decide whether the invariant is exact serialization, numerical equivalence within a declared tolerance, or a downstream promotion decision. I would avoid blindly updating a golden file. Inspect the difference, identify its source, and test whether it crosses a scientific threshold. The tolerance belongs to the method and units, not to whatever change happens to pass.

### What this tests

- Test portfolio rather than line coverage
- Independence of evidence paths
- Simulation limits
- Bounded hardware authorization
- Numerical tolerance discipline

## Conversation 6: Incident response across software and device state

### Setup

This is a compact systems-debugging exercise. There is intentionally not enough information for an immediate root-cause claim.

**Evidence basis:** [E2][E4][E6]

### Conversation

**Luke (simulated):** A long experiment started degrading after a software deployment. Service latency and error rate look normal. What is your first move?

**Vi:** Preserve identity before changing anything. I want the run IDs, software and analysis versions, compiled artifacts, calibration graph, device snapshot, raw shot order, queue and retry history, and scientific metrics. Then I would stop incompatible data from being merged while we investigate.

The deployment is a temporal clue, not yet the cause.

**Luke (simulated):** The team wants to roll back immediately.

**Vi:** If the run is at risk, rollback may be the correct containment step. I would still preserve the failing state first if it is safe to do so, and I would treat improvement after rollback as evidence, not complete proof. The rollback might also change load, timing, calibration selection, or device conditions.

**Luke (simulated):** What do you compare?

**Vi:** A matrix of controlled differences:

- old versus new software on the same captured calibration graph;
- candidate versus last-known-good graph under the same software;
- replayed raw data through old and new analysis;
- short and long sequence depth;
- chronological and deliberately shuffled acquisition order;
- affected and unaffected devices or channels;
- service-plane events aligned with scientific-plane changes.

**Luke (simulated):** The raw data are identical, but classifications differ.

**Vi:** Then the device is not needed to reproduce that part of the failure. I would diff classifier version, thresholds, feature preprocessing, schema defaults, and outcome-bucket definitions. I would also quantify which shots moved among valid, erasure, and assignment-failure categories and whether the movement changes the scientific conclusion.

**Luke (simulated):** The classifications are identical, but only data collected after the deployment are worse.

**Vi:** Then the deployment may have changed execution while leaving analysis stable: timing, waveform selection, resource contention, controller code, calibration lookup, or ordering. Or the device changed independently at the same time. I would compare compiled and controller traces and correlate direct device monitors before naming either cause.

**Luke (simulated):** What does "resolved" mean?

**Vi:** We can reproduce the failure or explain why it was transient; a controlled intervention changes the predicted behavior; affected runs are identified; the fix has a regression test at the cheapest valid layer; hardware evidence passes where required; and rollback remains available. "The dashboard is green" is not enough.

### What this tests

- Containment versus diagnosis
- Temporal correlation versus cause
- Replay and version comparison
- Scientific and service observability
- Definition of resolution

## Conversation 7: Error-aware semantics through an API

### Setup

Quantum Circuits publicly describes error detection, real-time control flow, and error-detection handling. Public product concepts make the topic plausible, but no public evidence says Luke designed these APIs.

**Evidence basis:** [E1][E3][E5]

### Conversation

**Luke (simulated):** Suppose the hardware reports a logical measurement and an erasure signal. How would you represent the result in a public API?

**Vi:** I would avoid a nullable bit or an exception as the only model. The outcome is a tagged value with explicit categories and provenance, for example:

```text
valid(logical_value, confidence, measurement_id)
erasure(location, detection_time, check_id)
assignment_failure(reason, raw_record_id)
execution_failure(stage, retryability, trace_id)
```

The exact schema would depend on the measurement model, but each category must remain distinguishable through serialization, analysis, and control flow.

**Luke (simulated):** Why is assignment failure not just an erasure?

**Vi:** Because they make different claims. An erasure says the physical state left the code space and the event was localized according to the measurement model. Assignment failure says the software or measurement could not classify the observation reliably. Combining them changes both physics statistics and operational diagnosis.

**Luke (simulated):** A user only wants counts. Why expose all of this?

**Vi:** Give them a convenient aggregation, but derive it from the structured record and preserve the original categories. Otherwise an SDK default can silently change a published erasure rate or postselected result.

**Luke (simulated):** How does this survive compilation?

**Vi:** Checks and branches need typed semantics before lowering: what condition is observed, when it becomes available, which controller capability executes the branch, and what state exists on each path. The compiler can reject a target that lacks the needed real-time or error-handling capability instead of emulating it silently with different timing.

**Luke (simulated):** Qiskit users expect circuits. Are you arguing against a familiar interface?

**Vi:** No. Familiar interfaces are valuable, but capability loss should be explicit. A generic circuit path can support the common subset. Architecture-specific features need capability negotiation or a richer API. The mistake would be claiming semantic equivalence when real-time branching or erasure metadata has been dropped.

**Luke (simulated):** How would you test the schema?

**Vi:** Round-trip serialization, version migration, exhaustive category handling, compiler rejection on missing capability, replay of known raw records into expected buckets, and tests proving that aggregation cannot move a shot between categories without a versioned rule change.

### What this tests

- Domain types instead of overloaded booleans
- Measurement semantics
- Capability negotiation
- Familiar API versus architecture-specific behavior
- Schema evolution and reproducibility

### Private boundary

This is a reference design exercise. It is not a description of QCDL, Aqumen, D-Wave's controller protocol, or Luke's implementation choices.

## Conversation 8: Physics depth and the honest boundary

### Setup

Luke's physics background means Vi may need to move one layer below circuit vocabulary. The goal is not to imitate an experimentalist. It is to show a correct simple model, its software consequence, and what would need verification.

**Evidence basis:** [E1][E4][E6]

### Conversation

**Luke (simulated):** What interaction moves the photon between the two rails?

**Vi:** In the effective model, a beamsplitter interaction has the form

```text
H / hbar proportional to g(a-dagger b + a b-dagger)
```

It coherently exchanges one excitation between the modes. Pulse duration and effective coupling set the rotation angle, and drive phase sets the rotation axis in the encoded space.

**Luke (simulated):** And what creates the conditional phase in the SWS gate?

**Vi:** The control excitation is temporarily swapped into a transmon coupler. A dispersive or cross-Kerr interaction with a target cavity makes the accumulated phase depend on their occupations. In the simple model, the relevant term is proportional to `chi n_target n_coupler`; the wait time is chosen so the intended joint basis condition gains a pi phase, then the excitation is swapped back.

**Luke (simulated):** Why is the control side noisier?

**Vi:** Because it temporarily occupies the coupler, whose coherence is poorer than the storage cavities in the reported device. The target rail mostly idles. That creates a directional error structure rather than a symmetric two-qubit depolarizing channel.

**Luke (simulated):** Derive the exact pulse phase for the second swap.

**Vi:** I cannot derive the device-specific expression reliably from memory, and I would not guess. My current model is that the phase must close the population trajectory and return the excitation to the cavity despite the detuned evolution when the target occupation shifts the interaction. I would derive it from the piecewise Hamiltonian and verify it against the paper's calibration appendix or the team's implementation.

**Luke (simulated):** What would the software need from that derivation?

**Vi:** Named parameters with units and conventions, the dependencies among swap duration, wait time, and swap-back phase, a valid operating range, and tests connecting the analytical convention to the pulse implementation. If wait time changes and swap-back phase must be recalibrated first, that order belongs in the dependency model rather than a comment in a notebook.

**Luke (simulated):** You have not operated this hardware. Why should I believe you can ramp?

**Vi:** You should not infer hardware skill from my simulator work. The evidence I can offer is that I learn technical domains by building explicit models, tests, and falsification points, and I already understand enough of this architecture to know where software can erase physical meaning. I would expect the team to judge my ramp through concrete milestones: explain the protocols, reproduce trusted analysis, make a bounded change under review, and eventually own a low-risk calibration or tooling path.

### What this tests

- Effective Hamiltonian literacy
- Physical reason for asymmetric errors
- Refusal to bluff a derivation
- Translation from physics dependency to software dependency
- Observable ramp plan

## Conversation 9: Code review and mentorship across disciplines

### Setup

The role includes code review, documentation, and mentorship. This branch avoids turning mentorship into generic friendliness.

**Evidence basis:** [E2][E6]

### Conversation

**Luke (simulated):** A physicist submits code that produces the right plot but is hard to maintain. How do you review it without becoming the process police?

**Vi:** I would begin with the scientific risk, not style. Can another person reconstruct the inputs, device state, units, transformation, and failure conditions? Does a retry duplicate an operation? Can a schema default silently change the result? Which part must remain flexible for the experiment?

Then I would separate blocking issues from cleanup. A hidden unit conversion or mutable calibration lookup blocks. Naming and decomposition can often be improved incrementally.

**Luke (simulated):** They tell you abstraction will make the experiment harder to change.

**Vi:** They may be right. I would ask which change they expect next. If every protocol is forced through a generic abstraction before the repeated shape is understood, the abstraction becomes friction. I prefer one clear implementation and a replay test first, then extract the stable boundary after the second or third real variation.

**Luke (simulated):** How do you explain a software invariant to a physicist who does not care about your architecture?

**Vi:** Connect it to the experiment. Instead of "the DTO must be immutable," say "we need to prove which pulse settings produced this dataset even after the default changes." Instead of "idempotency," say "a network retry cannot apply this update twice." The invariant should have an observable failure they recognize.

**Luke (simulated):** And how do you receive a physics correction?

**Vi:** Update the model visibly. I would restate the correction, identify which code or test assumption changes, and preserve a regression case. Defending the old abstraction after the physical premise changed would be the expensive response.

**Luke (simulated):** Tell me about mentoring.

**Vi:** My direct evidence is teaching and technical support: quantum-computing assignments and labs, computer-science and database mentoring, and cross-disciplinary work in scientific software. [Personal evidence needed: prepare one specific case where feedback changed how another person debugged or designed something, including what they could do independently afterward.]

### What this tests

- Risk-based review
- Respect for experimental iteration
- Translation of software terms into scientific consequences
- Ability to update after correction
- Concrete mentoring outcome

## Conversation 10: Candidate questions and a clean close

### Setup

The strongest questions invite Luke to reveal the actual team boundary. They should not smuggle in a claim that public research cannot support.

**Evidence basis:** [E1][E2][E4]

### Conversation A: From experiment software to shared infrastructure

**Vi:** The open papers credit you with software used in the measurement and entangling-gate projects, while other contributors are named for gate calibration, hardware, data acquisition, and analysis. From your perspective, what changes when software that supports one experiment has to become shared infrastructure for multiple physicists and devices?

**Luke (simulated):** The difficult part is not always the first implementation. It is deciding which assumptions are part of the interface and which are temporary details of one experiment.

**Vi:** So the maturity signal is less "the notebook ran" and more "the assumptions and failure behavior are explicit enough that another protocol can depend on them." Where does that boundary still create the most friction for the team?

**Why this works:** It uses the public contribution boundary accurately and asks for Luke's real experience without asserting what he owned.

### Conversation B: Success in the first six months

**Vi:** For someone who already has production scientific-software experience but is new to operating superconducting hardware, what evidence after six months would make you say the ramp is working?

**Luke (simulated):** I would look for someone who can work with the physicists without requiring every detail to be translated for them, and who can make a useful software change without hiding the experiment's assumptions.

**Vi:** Would you expect that evidence to come first through analysis and replay tooling, protocol integration, or direct calibration ownership?

**Why this works:** It names the gap and asks for an observable standard rather than reassurance.

### Conversation C: Testing boundary

**Vi:** Which failures in your current workflow are consistently invisible to unit tests, simulation, or replay and still require a long hardware run to expose?

**Luke (simulated):** Some issues only appear when the whole timing and device context are real. The challenge is learning enough from those expensive runs to improve the cheaper tests.

**Vi:** When one escapes, does the team usually preserve it as raw-data replay, a synthetic fault model, a bounded hardware canary, or some combination?

**Why this works:** It asks about evidence flow, not confidential topology.

### Conversation D: Close

**Luke (simulated):** Is there anything else you want me to know?

**Vi:** The main thing is that I understand the boundary in my experience. I have not operated superconducting hardware, and I am not presenting simulation as a substitute. I do have five years of production software around instruments and scientific workflows, plus a substantial quantum-software body of work. I know how to make assumptions and failures inspectable, and I am prepared to learn the device-specific layer from evidence and from the people who operate it.

The role is compelling because that bridge is the work, not an incidental part of it.

**Luke (simulated):** Thank you. We will follow up after the team compares notes.

**Vi:** Thank you. I appreciated the technical conversation and the chance to understand the boundary more clearly.

## Rapid-fire follow-up bank

These are plausible probes, not predictions. Answer each in two or three sentences before expanding.

### Software and systems

**Luke (simulated):** What state must be immutable?

**Vi:** Raw observations and the identity of the configuration used for a completed run. Derived artifacts can be regenerated if their code and inputs are versioned; the historical evidence cannot be silently replaced.

**Luke (simulated):** When is retry unsafe?

**Vi:** When an operation has an external effect without an idempotency key or known state transition, such as applying a parameter, reserving hardware, or promoting a calibration. A timeout does not tell us whether the effect occurred.

**Luke (simulated):** What deserves a type rather than a float?

**Vi:** Anything whose identity, unit, validity, uncertainty, or lifecycle affects correctness. A frequency estimate and a pulse amplitude should not be interchangeable merely because both serialize as numbers.

**Luke (simulated):** What is your rollback invariant?

**Vi:** A failed candidate must leave a reconstructable last-known-good graph available, and readers must observe either the old coherent state or the new coherent state, not a partial mixture.

### Physics and experiments

**Luke (simulated):** Why does a known error location help?

**Vi:** The decoder has less uncertainty. For a given code distance, erasure information can support correction of more located faults than unknown Pauli faults, provided residual errors stay small.

**Luke (simulated):** What does purity add beyond fidelity?

**Vi:** Fidelity says how close the result is to the target; purity helps distinguish a consistent wrong state from mixing across uncontrolled states or noise. Their joint behavior can narrow hypotheses but does not identify a cause alone.

**Luke (simulated):** Why can an average hide drift?

**Vi:** It combines observations from different device states into one distribution. Without order and timestamps, broadening or multimodality can be mistaken for stationary random noise.

**Luke (simulated):** Why preserve control-target asymmetry?

**Vi:** Scheduling and error correction may exploit which orientation carries more erasure or dephasing. Symmetrizing the model can discard a real resource and produce misleading tests.

### Candidate boundary

**Luke (simulated):** What would you need help with first?

**Vi:** Device-specific control and calibration practice: how this hardware exposes modes, waveforms, readout, safety limits, and evidence for promotion. I would aim to become independent first on replay and low-risk tooling while pairing on hardware procedures.

**Luke (simulated):** What if your architecture model is wrong?

**Vi:** Then I want the correction early. I would identify which requirements survive, remove unsupported structure, and add the counterexample to the design record so the same assumption does not return later.

**Luke (simulated):** Why quantum rather than another scientific-software role?

**Vi:** Because the software contracts are unusually close to the physical model. Timing, noise, measurement, and error semantics are not implementation details, and that combination of rigorous software with difficult scientific evidence is where I want to work.

## Claims to avoid: questions that sound researched but overreach

Avoid these forms:

- "When you designed the SWS calibration..."
- "How does your dependency-graph service work?"
- "When you built QCDL..."
- "As manager of the whole gate-model software team..."
- "Since your cuprate research is directly applicable to cavity QED..."
- "Now that you know drift caused the 103-gate degradation..."

Use these instead:

- "The paper credits you with software used for the project. What part of that boundary did you work closest to?"
- "How does the team represent calibration dependencies, at whatever level you can discuss publicly?"
- "Where do public SDK semantics and internal experiment tooling need different abstractions?"
- "How is responsibility divided across systems software, control, calibration, and physics?"
- "What did you have to relearn when moving from condensed matter and production software into this device architecture?"
- "What evidence is the team using to separate the candidate causes of the long-depth behavior?"

## Readiness checks

Before using this portfolio, Vi should be able to:

1. Give the Conversation 1 opening in under 90 seconds.
2. Supply one true Ariadion defect or design-reversal story.
3. Supply one true workflow-productionization story from Clinisys or research software.
4. Supply one concrete mentoring outcome.
5. Explain dual rail without confusing detection, correction, leakage, erasure, and postselection.
6. Draw the stale-parameter versus changing-device experiment from memory.
7. Explain why a dependency graph cannot detect unknown physical drift.
8. State the beamsplitter and dispersive interaction models without pretending to derive device-specific pulses.
9. Ask one question, listen to the answer, summarize it, and ask only one follow-up.
10. Stop speaking when the claim is complete.

## Sources and status

### Local sources

- **[E1]** [Luke Mastalli-Kelly Public Evidence Portfolio](Luke_Mastalli_Kelly_Public_Evidence_Portfolio.md), researched 14 August 2026.
- **[E6]** [D-Wave Application and Study Materials](DWave_Application_and_Study_Materials.md), especially the resume, Luke conversation guide, repeated-CZ guide, and screening guide.

### Public technical sources

- **[E2]** D-Wave, *Senior Quantum Software Engineer*. <https://ats.rippling.com/d-wave-quantum/jobs/118d200e-d7a8-44ea-bad0-89995deaaa2b>
- **[E3]** Chou et al., *Demonstrating a superconducting dual-rail cavity qubit with erasure-detected logical measurements*. <https://arxiv.org/abs/2307.03169>
- **[E4]** Mehta et al., *Bias-preserving and error-detectable entangling operations in a superconducting dual-rail system*. <https://arxiv.org/html/2503.10935v1>
- **[E5]** Quantum Circuits public [technology](https://quantumcircuits.com/technology/) and [product](https://quantumcircuits.com/product/) pages.

### Status

`draft` for rehearsal. Local links, metadata, evidence labels, and source availability can be checked deterministically. Realism cannot be verified before an actual conversation, and no simulated answer should be treated as a fact about Luke or D-Wave.