# OT-C7-001 — Revision 2.5c v4 review note

**Status:** PROPOSED / UNDER INDEPENDENT AUDIT. No freeze, method-comparison execution, or Test 0 execution authorized. Stage 4A; 1/31 blockers resolved.

## Source and provenance
Claude supplied `Rev2.5c-draft-v4.md` (2026-10-08), a proposed amendment, not an approved or compiled artifact. Source attachment remains in the conversation; do not claim it is already committed to this repository.

## Current findings
- v4 introduces E0 for singleton survivor sets and E0b for the two-survivor subset {PB, BCa}, covering the v3 gap where Newcombe is absent.
- Full abstract space: 7 nonempty survivor subsets, 25 weak orders, 55 labelled configurations: 3 singleton + 3 × 5 two-survivor + 37 three-survivor.
- v4 §5.1 contains a documentation error in the {N,PB} derivation: `1 strict × 2²` should read `2 strict × 2¹`, plus 1 all-equal order, yielding 5.
- Claimed labelled outcome counts: N=27, PB=12, BCa=12, unresolved=4. These agree arithmetically with the proposed case assignments, but are **not empirical win probabilities**.
- Claimed distinct (subset, weak order, case) combinations: 29. This is a derived grouping count, not 29 executable tests.
- E0, E0b, and Option A remain proposed policy; case-completeness and reachability require independent audit against the actual draft and, later, the compiled artifact.
- v4 retains exact integer coverage counts and strict tolerance 11025; Step 6 routes unresolved exact tie to 4A and cross-gamma coupling to 4C.

## Audit follow-up
- [ ] Correct the two-survivor derivation formula.
- [ ] Verify the case table is total and mutually exclusive over all seven survivor subsets.
- [ ] Verify strict threshold boundary (difference exactly 11025 is **clear**, not near).
- [ ] Verify all 55 abstract configurations are feasible under exact integer K scores and the stated labelling constraints.
- [ ] Obtain independent Claude/DeepSeek/ChatGPT audit of proposed v4, with unresolved objections recorded.
- [ ] Preserve correction history and policy approval record before considering freeze.

**GitHub tracking issue:** [OT-C7-001](https://github.com/rezboots-cmyk/c7-public-tests/issues/1).
