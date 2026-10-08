# Synthetic Test 0 — Testing Audit Appendix

**Scope:** Testing protocol and independent audit only. This is NOT an appendix to Part I, Part II, or the hurricane manuscript.

**Governance status (2026-10-08):** Stage 4A active; Blocker #11 under review; 1/31 blockers resolved (#10 only). Revision 2.5b is an audited historical draft (five formal checks passed), not frozen. Revision 2.5c v3 is proposed, not approved. Proposed v4 / E0 and Option A are not approved. No protocol freeze, method-comparison execution, or Synthetic Test 0 execution is authorized.

## Tracking rules
1. Give each outside verification an identifier (starting OT-C7-001), with scope, input revision, expected decision behavior, reviewers, findings, and evidence.
2. Record findings separately from proposed remedies. Preserve rejected or superseded proposals and links to the revision that addressed them.
3. Track each proposed policy with alternatives, rationale, approval authority/status, and its dependent tests.
4. Keep the 31-blocker ledger distinct from audit findings. Do not mark a blocker resolved without recorded closure evidence and authorization.
5. A review or enumerative specification check is **not** authorization to run the method comparison or Test 0.
6. Never overwrite historical revisions. Link immutable versions, commits, issue discussions, and review results.

## Initial Outside Test: OT-C7-001 — Survivor-set decision completeness
**Status:** SPECIFICATION REVIEW / BLOCKED; no execution authorized.
**Parent:** Stage 4A, Blocker #11, §7 Steps 4–6, proposed Revision 2.5c.
**Finding:** Step 1–3 per-method elimination filters permit all seven nonempty survivor subsets of {Newcombe (N), percentile bootstrap (PB), BCa}. Revision 2.5c v3 E1–E8 fails to select a case for a lone non-Newcombe survivor and for {PB,BCa} with a strict minimum.
**Proposals:** E0 (N absent and unique minimum => minimum-scoring survivor wins), with exact PB/BCa tie remaining E7; alternative cardinality gate 5.0. Neither is approved. Option A (Newcombe promotion requires unique second) remains proposed.
**Required verification:** enumerate all seven nonempty survivor subsets; weak orders; top-gap near/clear labels as applicable; unique decision case; winner or unresolved; exact integer K score and strict tolerance 11025; Step 6 unresolved→4A versus cross-gamma coupling→4C. Distinguish counts for three-survivor subset (13 weak orders, 37 fully labelled configurations) from complete survivor-subset space.
**Known documentation issue:** v3 claims 18 compressed rows but displays 37 rows; remove or reconcile. Outcome frequency over labelled configurations is not empirical win probability.
**Reviewers:** ChatGPT, Claude, DeepSeek; independent audit pending on amended draft.
**Evidence to attach:** proposed v4 text, full enumeration, independent review notes, exact source/compiled artifact comparison when authorized.
**Exit criterion:** all reachable nonempty survivor subsets have exactly one defined case; proposed policies explicitly approved; independent audit passed; governance authorizes closure. Until then, BLOCKED.

## Ledger index
| ID | Type | Subject | Status |
| --- | --- | --- | --- |
| OT-C7-001 | Outside test | Survivor-set decision completeness | BLOCKED — specification review |
| FIND-C7-001 | Finding | Missing outcomes when N absent and unique minimum | OPEN |
| POL-C7-001 | Policy proposal | Option A unique-second Newcombe preference | PROPOSED |
| POL-C7-002 | Policy proposal | E0 versus 5.0 cardinality handling | PROPOSED |
| DOC-C7-001 | Documentation finding | v3 18-row claim versus 37 displayed rows | OPEN |
| B11 | Stage 4A blocker | Method comparison protocol | OPEN |
