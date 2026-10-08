# NS-C7-018 — Retained-Response Decay / Fading-Memory Test

## Hypothesis
Apparent fading memory can arise because past response is written into present structure, retained after the instantaneous response switches off, and then decays/reorganizes.

`past dynamics -> generated response -> retained present structure -> decay/reorganization -> apparent fading memory`

## Fresh trajectories
- Seeds 216–239
- Development 216–227
- Evaluation 228–239
- N=16, nu=0.02, Heun/RK2, dt=0.01, t_end=2.0
- diagnostics every 0.05
- initial modes k<=3
- 2/3 dealiasing

## Coordinates
- `q=P-D`
- `M_exp`: exponentially weighted signed q over trailing 0.30, lambda=4
- `M_pos`: exponentially weighted positive response max(q,0) over trailing 0.30, lambda=4
- `M_pos_structural_proxy`: held-out reconstruction of M_pos from present geometry only

## Held-out present-geometry encoding
- Spearman rho = 0.93582
- Pearson r = 0.86568
- R^2 = 0.72492
- RMSE = 0.11002

## Post-crossing decay
Each evaluation trajectory was tracked for 0.30 after its first q>0 -> q<=0 transition.

Pooled normalized structural-proxy vs explicit retained-response decay:
- Spearman rho = 0.94940
- Pearson r = 0.89690
- n = 84

Median fitted decay rates:
- explicit M_pos lambda = 7.72950
- structural proxy lambda = 0.25045
- median |delta lambda| = 7.57125

After q had become nonpositive:
- positive structural-proxy fraction = 1.00000

## Interpretation
This experiment directly tests whether a present-time structural signature persists after the instantaneous response q has switched nonpositive and whether that signature decays with the explicit fading-memory coordinate.

A positive result supports retained-response mediation of reduced fading memory. It does not establish a separate non-Markovian memory in the full Navier–Stokes state.

## Provenance / Immutable Archive

The original frozen NS-C7-018 ZIP artifact was archived before this README provenance update.

- Original frozen ZIP SHA-256: `bc43f7cdf2a247d7d43e137ca1dbea40447eeb4b32eb68123fb687473220ffe3`
- Original Pinata / IPFS CID: `bafkreif4ip3434vci7l5ipqtpsq5x2sair7owszs5nubep5wq5dteih74m`

These identifiers refer to the original frozen ZIP artifact generated from the NS-C7-018 run.

This README-enhanced package contains the same experiment outputs plus this provenance record. Because the README was modified, this updated package has a different SHA-256 and should receive its own IPFS CID if pinned separately.

