---
title: Mathematics and Quantum Foundations Authoritative Sources
kind: research-portfolio
status: verified
research_date: 2026-08-14
privacy: public educational sources only
source_files: []
external_research: authoritative public educational sources
---

# Mathematics and quantum foundations authoritative sources

## Purpose

This portfolio is the provenance record for the feedback-driven foundations batch. It records exactly which public educational sources were inspected, what each source supports, and where the resulting knowledge pages deliberately stop.

Access date for every link below: **2026-08-14**.

## Authority order

1. Official university course material from MIT OpenCourseWare.
2. Official IBM Quantum Learning course material written for quantum information education.
3. OpenStax peer-reviewed textbooks published by Rice University.

These sources support established introductory definitions and worked examples. They do not support claims about D-Wave's private implementation, a particular device's calibration, or the physical cause of the repeated-CZ observation.

## OpenStax: complex numbers

Source: [OpenStax Precalculus 2e, 3.1 Complex Numbers](https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers).

Verified coverage:

- a complex number has standard form $a+bi$ with real and imaginary parts;
- complex numbers can be represented as points on a plane;
- conjugation changes the sign of the imaginary part;
- arithmetic combines or distributes over real and imaginary components;
- the section provides exercises and worked examples.

Boundary: the inspected section emphasizes rectangular form. The foundations page derives magnitude and phase from plane geometry and labels that derivation as an explanation rather than quoting the source.

## OpenStax: probability and repeated trials

Source: [OpenStax Introductory Statistics 2e, 3.1 Terminology](https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology).

Verified coverage:

- an outcome is a result of an experiment and a sample space lists possible outcomes;
- an event is a collection of outcomes;
- probabilities lie between zero and one;
- long-run relative frequency approaches theoretical probability as repetitions increase;
- small samples need not match theoretical probabilities exactly.

Boundary: this source supports classical probability and sampling language. It does not supply the quantum rule that maps amplitudes to probabilities.

## MIT OpenCourseWare: vectors, bases, and dimension

Source: [MIT 18.06SC, Independence, Basis and Dimension](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/independence-basis-and-dimension/).

Verified coverage:

- a basis is a minimal set of vectors whose combinations produce every vector in the space;
- the number of basis vectors is the dimension;
- the course supplies lecture notes, problems, and solutions.

Supporting source: [MIT 18.06SC, Complex Matrices and Fast Fourier Transform](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/complex-matrices-fast-fourier-transform-fft/).

Verified coverage: the session explicitly covers complex-valued matrices and vectors and provides checked problems and solutions.

## MIT OpenCourseWare: matrices and linear transformations

Source: [MIT 18.06SC, Linear Transformations and their Matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/).

Verified coverage:

- multiplying a matrix by an input vector produces an output vector;
- a matrix represents what a linear transformation does to vectors;
- the session provides lecture notes, problems, and solutions.

## MIT OpenCourseWare: eigenvalues and complex matrices

Source: [MIT 18.06SC, Unit II: Least Squares, Determinants and Eigenvalues](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/).

Supporting source: [MIT 18.06SC, Symmetric Matrices and Positive Definiteness](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/symmetric-matrices-and-positive-definiteness/).

Verified coverage: the course unit teaches eigenvalues and eigenvectors; the symmetric-matrix session connects matrix structure with eigenvalues and eigenvectors and includes problem-and-solution material.

Boundary: the new page uses only the defining equation $Av=\lambda v$ and small deterministic examples. It does not teach characteristic polynomials or spectral theorems in full.

## IBM Quantum Learning: state vectors, measurement, and gates

Source: [IBM Basics of Quantum Information, Single Systems introduction](https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information/single-systems/introduction).

Source: [IBM Basics of Quantum Information, Quantum Information](https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information/single-systems/quantum-information).

Verified coverage:

- a finite quantum state is represented by a column vector with complex entries and unit Euclidean norm;
- Dirac ket notation names vectors and a bra is the conjugate transpose;
- standard-basis measurement returns a classical outcome with probability equal to the corresponding amplitude's absolute value squared;
- the source identifies this probability rule as the Born rule;
- quantum operations on state vectors are represented by unitary matrices;
- a unitary matrix preserves Euclidean norm;
- Pauli, Hadamard, and phase operations provide concrete gate examples;
- relative phase can change later behavior even when one measurement basis gives the same distribution.

Source: [IBM Basics of Quantum Information, Quantum Circuits introduction](https://quantum.cloud.ibm.com/learning/courses/basics-of-quantum-information/quantum-circuits/introduction).

Verified coverage: the lesson introduces inner products, orthogonality, projections, and projective measurements as part of the quantum-circuit model.

Boundary: IBM's finite-dimensional information treatment is used for state vectors, standard-basis measurement, and unitary gates. The foundations pages do not generalize those statements to every continuous-variable physical system without a separate source.

## MIT OpenCourseWare: operators, observables, and oscillator physics

Source: [MIT 8.04 Quantum Physics I, Lecture Notes](https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/pages/lecture-notes/).

Verified coverage: the official undergraduate course provides dedicated notes on expectation values, momentum and uncertainty; operators and the Schrodinger equation; time evolution; energy eigenstates; and the quantum harmonic oscillator.

Source: [MIT 8.05 Quantum Physics II, Lecture Notes](https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/pages/lecture-notes/).

Verified coverage: the official undergraduate course provides dedicated notes on bras, kets, operators, vector spaces, observables, quantum dynamics, and two-state systems.

Boundary: the resulting pages introduce Hermitian observables, expectation values, and number states only to the depth needed for the dual-rail path. They do not attempt a complete course in functional analysis, wave mechanics, or oscillator differential equations.

## Use in the knowledge tree

Every new foundation content page declares this portfolio in `source_files` and links to the relevant section above. The page itself distinguishes source-backed definitions from worked explanation. Status remains `draft` because local links and formulas are checked, but the repository does not independently reproduce the universities' full course-assessment process.

## Preservation and update rule

Do not silently replace a link if a provider reorganizes its site. Record the new URL, access date, and changed coverage here first, then update dependent pages and rerun the knowledge validator.