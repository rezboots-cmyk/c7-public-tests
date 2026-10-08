# NS-C7-018 — Scientific Audit Status

**Status: Provisional experimental record; independent scientific verification incomplete.**

This public folder is a copy of selected original records from the private repository `rezboots-cmyk/ns-c7-research/experiments/NC-C7-018/`. The source experiment files are preserved without intentional modification. The audit below is an additional document, not part of the frozen original experiment.

## Experiment scope
Reduced-order 16-mode fluid calculation; development seeds 216–227, evaluation seeds 228–239. The original README describes `M_pos` as an exponentially weighted positive-part response over a trailing 0.30-unit window (kernel rate 4), and `M_pos_structural_proxy` as a held-out present-geometry reconstruction.

## Findings and limits
- Strong within-evaluation-trajectory rank association was observed across 41 diagnostic points per seed (Spearman rho approximately 0.906–0.954). Shared temporal trends are an alternative explanation and have not been excluded.
- The seven-point post-crossing Spearman rho of 1.0 for each seed is non-discriminating when both sequences are monotonically decreasing.
- Explicit `M_pos` reaching zero after the 0.30-unit post-crossing interval is expected for a finite trailing positive-part window after uninterrupted nonpositive forcing. It is not independent evidence of physical memory loss.
- The geometry proxy is negative at 131 of 492 evaluation observations despite the nonnegative target definition. It may be an unconstrained statistical estimator; physical admissibility is not established.
- Across 12 crossing events, the fitted decay-rate rank correlation is approximately 0.06993. Proxy decay rates vary much more than explicit-coordinate decay rates.
- Across 12 crossing events, the Pearson association between `M_pos_at_cross` and `proxy_at_cross` is approximately -0.50; this small-sample cross-sectional comparison does not establish a population-level negative relationship.
- The summary reports a geometry-encoding Spearman rho of approximately 0.935815, whereas pooling all evaluation trajectory rows gives approximately 0.923. The precise calculation producing the summary number is not yet reconciled.
- Reported pointwise significance levels should not be interpreted as if time-adjacent observations within trajectories were independent.

## Open reproducibility questions
1. Locate the original reconstruction algorithm, coefficients, features, preprocessing, and training/evaluation separation.
2. Reproduce the reported geometry-encoding correlation from an explicit code path.
3. Test common-time and activity covariates and cross-seed calibration.
4. Validate finite-window kernel calculations and fitted decay-rate interpretation.
5. Verify the archived ZIP against its recorded SHA-256/IPFS CID and compare archived bytes with the repository package.

## Interpretation boundary
The stored numerical outputs establish descriptive associations, **not** causal retained-response mediation or a separate non-Markovian memory in the full Navier–Stokes state. The original experiment's positive interpretation remains a hypothesis requiring further tests.

## Provenance
The original provenance document records experiment commit `cf657cf8331db7fa290f78d8ee599e7d91731008`, frozen ZIP SHA-256 `bc43f7cdf2a247d7d43e137ca1dbea40447eeb4b32eb68123fb687473220ffe3`, and IPFS CID `bafkreif4ip3434vci7l5ipqtpsq5x2sair7owszs5nubep5wq5dteih74m`. These archive identifiers have not been independently verified here.

**Scientific firewall:** Synthetic Test 0 is a separate preregistration project. No Test 0 execution has occurred; its status remains Stage 4A, 1 of 31 blockers resolved.
