# OT-C7-001 — v4 correction 01 (Claude-reported)

**Status:** Proposed revision correction; independent verification against the revised source file pending. This entry preserves provenance; it is not approval, compilation, freeze, or test execution.

## Reported source changes
Claude reports that the in-place revised `outputs/Rev2.5c-draft-v4.md` (13.8 KB) fixes the two-method derivation for each of {N,PB}, {N,BCa}, {PB,BCa} to `2 strict × 2¹ + 1 one-block × 2⁰ = 4 + 1 = 5`. The three-method derivation remains `6 strict × 2² + 6 two-block × 2¹ + 1 one-block × 2⁰ = 37`. Total: 3 + 15 + 37 = 55.

## Boundary regression test requested (new §6a)
Newcombe uniquely second; exact integer gap `K(second) - K(minimum)`:

| Gap | Expected classification | Case | Result |
|---:|---|---|---|
| 11024 | near | E2 | promote Newcombe |
| **11025** | **clear** | **E3** | **no promotion** |
| 11026 | clear | E3 | no promotion |

The strict rule is `gap < 11025`. Replacing it with `<=` would incorrectly promote at equality.

## Audit/provenance notes
- Claude reports correction-history entry five for the erroneous `1 strict × 2²` expression.
- Claude reports §6a was added. **The revised file itself has not yet been fetched or attached to this GitHub record**, so do not claim direct independent source verification.
- The revised draft reused the v4 filename. Preserve future drafts with distinct versioned paths and source hashes rather than overwriting historical versions.
- Next: receive revised v4 artifact; audit actual source, verify boundary regression and full subset enumeration; obtain independent review before approval.

**Governance:** Stage 4A active; 1/31 blockers resolved. Revision 2.5c v4 remains proposed; no freeze, method-comparison execution, or Synthetic Test 0 execution authorized.

Related: [OT-C7-001 Issue #1](https://github.com/rezboots-cmyk/c7-public-tests/issues/1) and [initial v4 review](OT-C7-001-v4-review.md).
