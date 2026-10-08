// Rev 2.5c v4: enumerate ALL nonempty survivor subsets of {N, PB, BCa},
// verify every reachable configuration has exactly one applicable decision case.
// K = exact integer coverage-deviation score. LOWER IS BETTER. tau = 11025.

const TAU = 11025;
const ALL = ["N", "PB", "BCa"];

// all nonempty subsets, fixed display order for determinism
function subsets(arr) {
  const out = [];
  for (let m = 1; m < (1 << arr.length); m++) {
    out.push(arr.filter((_, i) => m & (1 << i)));
  }
  return out;
}

// weak orders (ordered set partitions) of a given set
function weakOrders(items) {
  const out = [];
  (function rec(rem, prefix) {
    if (rem.length === 0) { out.push(prefix); return; }
    const n = rem.length;
    for (let mask = 1; mask < (1 << n); mask++) {
      const blk = [], rest = [];
      for (let i = 0; i < n; i++) (mask & (1 << i)) ? blk.push(rem[i]) : rest.push(rem[i]);
      rec(rest, [...prefix, blk]);
    }
  })(items, []);
  return out;
}
function gapLabels(b) {
  const k = Math.max(0, b - 1);
  const out = [];
  for (let m = 0; m < (1 << k); m++)
    out.push(Array.from({ length: k }, (_, i) => (m & (1 << i)) ? "near" : "clear"));
  return out.length ? out : [[]];
}

// ---- The v4 procedure, including the E0 cardinality gate ----
function decide(S, blocks, gaps) {
  const inS = new Set(S);
  const idx = {}; blocks.forEach((b, i) => b.forEach(x => idx[x] = i));
  const k1 = blocks[0].length;

  // E0 — cardinality gate
  if (S.length === 1) return { out: "WINNER:" + S[0], case: "E0", note: "sole survivor" };

  // E0b — two survivors, Newcombe absent
  if (S.length === 2 && !inS.has("N")) {
    if (k1 === 2) return { out: "UNRESOLVED_EXACT_TIE", case: "E0b", note: "two tied, N absent" };
    return { out: "WINNER:" + blocks[0][0], case: "E0b", note: "strict order, N absent" };
  }

  // --- three-survivor cases (unchanged from v3) ---
  if (k1 === 1 && blocks[0][0] === "N") return { out: "WINNER:N", case: "E1" };
  if (k1 >= 3) return { out: "UNRESOLVED_EXACT_TIE", case: "E8" };
  if (k1 === 2 && !blocks[0].includes("N")) return { out: "UNRESOLVED_EXACT_TIE", case: "E7" };
  if (k1 === 2 && blocks[0].includes("N")) return { out: "WINNER:N", case: "E6" };

  const X = blocks[0][0];
  const nRank = idx["N"];
  if (nRank === 1) {
    const second = blocks[1];
    if (second.length > 1) return { out: "WINNER:" + X, case: "E4", note: "SHARED_SECOND_NO_PROMOTION" };
    if (gaps[0] === "near") return { out: "WINNER:N", case: "E2" };
    return { out: "WINNER:" + X, case: "E3" };
  }
  return { out: "WINNER:" + X, case: "E5" };
}

// ---- Walk the full space ----
const rows = [];
const perSubset = [];
subsets(ALL).forEach(S => {
  const orders = weakOrders(S);
  let n = 0;
  const casesHere = {};
  orders.forEach(blocks => {
    gapLabels(blocks.length).forEach(gaps => {
      const d = decide(S, blocks, gaps);
      // sanity: exactly one case label, outcome defined
      if (!d.case || !d.out || d.out === "undefined") throw new Error("unlabelled config");
      n++;
      casesHere[d.case] = (casesHere[d.case] || 0) + 1;
      const label = blocks.map(b => (b.length > 1 ? "K_" + b.join(" = K_") : "K_" + b[0])).join(" < ");
      rows.push({ S: "{" + S.join(",") + "}", size: S.length, weakOrder: label, gaps: gaps.join(", ") || "—", case: d.case, outcome: d.out, note: d.note || "" });
    });
  });
  perSubset.push({ S: "{" + S.join(",") + "}", size: S.length, weakOrders: orders.length, configurations: n, cases: casesHere });
});

const dist = {}; rows.forEach(r => { dist[r.outcome] = (dist[r.outcome] || 0) + 1; });
const caseCount = {}; rows.forEach(r => { caseCount[r.case] = (caseCount[r.case] || 0) + 1; });
const distinctWoCase = new Set(rows.map(r => r.S + "|" + r.weakOrder + "|" + r.case)).size;

// survivor cardinality summary
const bySize = {};
rows.forEach(r => { bySize[r.size] = (bySize[r.size] || 0) + 1; });

return {
  survivorSubsets: subsets(ALL).length,
  totalWeakOrders: perSubset.reduce((a, b) => a + b.weakOrders, 0),
  totalConfigurations: rows.length,
  configurationsBySurvivorSize: bySize,
  distinctSubsetWeakOrderCase: distinctWoCase,
  outcomeDistribution: dist,
  caseCounts: caseCount,
  perSubset,
  // full row dump for the table
  rows,
};
