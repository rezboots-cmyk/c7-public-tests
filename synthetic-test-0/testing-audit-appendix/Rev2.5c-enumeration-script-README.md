# Rev2.5c enumeration source provenance

The companion `Rev2.5c-enumeration-script.js` was transcribed from the user's pasted Claude source in the conversation. Its GitHub bytes have **not** been checked against Claude's declared SHA-256 `2ea9e561ac88fb59f4c5f5c6200de3bc75418d95f4bed804cced7b7430bab58f`; do not claim byte identity. The user-provided source is an evaluation-body snippet with a top-level `return` and is not a directly runnable standalone Node.js script without wrapping it in a function. Preserve it as a source record.

Reported enumeration outcomes: 7 nonempty subsets, 25 weak orders, 55 labelled configurations, 29 distinct `(subset, weak order, case)` contexts, 27 Newcombe winners, 12 PB winners, 12 BCa winners, 4 unresolved. DeepSeek independently reviewed the source logic against the draft's Step 5.4 table, but could not hash source bytes.

**Limits:** This symbolic enumeration uses supplied `near` and `clear` labels; it does not calculate K from coverage data and does not test the strict integer boundary. A separate numerical reference regression exists at `Rev2.5c-boundary-test.js` in this directory. Neither artifact verifies the eventual production implementation or authorizes method comparison.

No approval, freeze, compilation, or execution. Stage 4A active; Blocker #11 open; 1/31 blockers resolved.
