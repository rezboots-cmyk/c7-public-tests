# OT-C7-001 — v4 correction 02: fixed survivor set and provenance

**Status:** Proposed amendment / review guidance, not an approved protocol or executed test.

## Fixed survivor set
Steps 1–3 eliminate methods globally across the three declared coverage levels. A method eliminated on any applicable coverage-level criterion is excluded from subsequent ranking at every level. The single survivor set S is determined before per-gamma Step 4/5 ranking. The seven-subset / 55-labelled-configuration enumeration is a **per-level abstract case space over possible fixed survivor sets**, not a count of joint three-gamma outcomes or executable test runs. Per-gamma elimination would change this model and require re-enumeration.

**Suggested text for v4 §5:**
> Fixed survivor-set scope. Steps 1–3 determine a single survivor set S across all declared coverage levels. A method eliminated at any coverage level is excluded from subsequent ranking at every coverage level. The seven-subset, 55-configuration enumeration assumes this fixed survivor set. Per-level elimination would require a separate configuration-space analysis and is not part of Revision 2.5c.

## Claude's reported corrections
- §5.1 two-method subsets: `2 strict × 2¹ + 1 one-block × 2⁰ = 5` each; 3 + 15 + 37 = 55.
- §6a exact integer boundary: gap 11024 -> E2 (promote), 11025 -> E3 (do not promote), 11026 -> E3 (do not promote). Strict `gap < 11025`.
- §6 correction history adds a fifth entry about the erroneous `1 strict × 2²` expression.

## Provenance warning
Claude reports a revised in-place v4 file but no hash; previous versions were overwritten under reused filenames. The earlier uploaded v4 in this conversation was the pre-correction version. These corrections are recorded as Claude-reported text, not as independently verified bytes of the revised v4 artifact. Preserve a uniquely named revised source and SHA-256 after inserting the fixed-S clarification, then submit that exact file to independent reviewers. Do not manufacture hashes for unavailable historical files.

## Remaining work
- [ ] Insert fixed-S statement in source and save uniquely versioned file
- [ ] Compute hash for that immutable review candidate
- [ ] Independent audit of exact revised source and 55 per-level cases
- [ ] Validate joint three-gamma routing separately
- [ ] Compiled artifact verification when authorized

**Governance:** Stage 4A active; 1/31 blockers resolved. No approval, freeze, method-comparison execution, or Test 0 execution.

Related: [OT-C7-001 Issue #1](https://github.com/rezboots-cmyk/c7-public-tests/issues/1).
