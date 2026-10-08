# OT-C7-001 — DeepSeek independent v4 audit (reported)

**Status:** External reviewer report received; v4.1 source and SHA-256 NOT verified. Stage 4A active; 1/31 blockers resolved (#10 only), #11 open. No freeze, compilation, method-comparison execution or Test 0 execution.

## Scope limitation
DeepSeek reports receiving v4 draft, count and boundary excerpts, and a declared v4.1 hash string, but **not** the full v4.1 candidate bytes. Accordingly, this is a v4/text audit, not a hash-verified v4.1 audit.

## Reviewer findings
| Check | DeepSeek result | Registry disposition |
|---|---|---|
| Seven nonempty survivor subsets | PASS | Recorded |
| 25 weak orders | PASS | Recorded |
| 55 per-level labelled configurations | PASS | Recorded; not joint outcomes |
| E0/E0b/E1–E8 case completeness, exclusivity, reachability | PASS | Recorded for supplied v4 |
| Globally fixed S | PASS by implication | Explicit v4.1 wording UNVERIFIED |
| Strict gap 11024/11025/11026 | PASS | Recorded |
| Step 6 joint routing | PARTIAL | Proof or enumeration required |
| E6 preference when N ties at minimum | POLICY GAP | Check 2.5b provenance before classifying as new |
| v4.1 SHA-256 | UNVERIFIED | Need actual candidate bytes |

## Joint-level analysis
DeepSeek proposed 110 joint outcome patterns over fixed survivor subsets (3 singleton + 8+8+27+64 = 110) by combining per-level state alphabets. **This is a combinatorial upper-level outcome count under assumptions, not verified statistical attainability.** A rule-level routing proof partitions every three-level outcome tuple into: (1) any unresolved -> 4A; (2) no unresolved and differing winners -> 4C; (3) no unresolved and identical winners -> provisional winner / Step 7. This proves totality/exclusivity of routing at the level of outcome tuples, not joint feasibility.

## Outstanding items
- [ ] Obtain actual v4.1 audit candidate and independently compute SHA-256.
- [ ] Inspect explicit fixed-S and scope-of-55 additions in v4.1.
- [ ] Trace E6 preference to 2.5b original wording; if not authorized, label proposed policy with rationale.
- [ ] Add Step 6 routing proof or independent joint enumeration and distinguish feasible outcomes from abstract combinations.
- [ ] Clarify apparent 'byte-identical' statements by comparing exact files, not descriptions.
- [ ] Preserve reviewer notes and compile verification as a separate future step.

Related [OT-C7-001 Issue #1](https://github.com/rezboots-cmyk/c7-public-tests/issues/1).
