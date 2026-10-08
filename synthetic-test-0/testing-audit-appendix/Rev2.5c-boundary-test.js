'use strict';
// Independent numerical boundary regression; not the full method-comparison implementation.
const M = 5000;
const G = 441;
const TARGET = Object.freeze({'0.90':4500,'0.95':4750,'0.99':4950});
const TAU = 11025;
function score(counts, gamma) {
  const target = TARGET[gamma];
  if (!Number.isInteger(target) || counts.length !== G) throw new Error('invalid input');
  let sum = 0;
  for (const count of counts) {
    if (!Number.isInteger(count) || count < 0 || count > M) throw new Error('invalid count');
    sum += Math.abs(count - target);
  }
  return sum;
}
function adjudicateUniqueSecond(kMinimum, kNewcombe) {
  if (!Number.isInteger(kMinimum) || !Number.isInteger(kNewcombe) || kNewcombe <= kMinimum)
    throw new Error('requires non-Newcombe unique minimum and Newcombe uniquely second');
  return (kNewcombe - kMinimum) < TAU ? 'E2' : 'E3';
}
for (const [gap, expected] of [[11024,'E2'],[11025,'E3'],[11026,'E3']]) {
  // Construct valid 441-cell coverage-count vectors at gamma=0.95.
  // Baseline minimum K=0; Newcombe K=gap by distributing deviations <=250 per cell.
  const minimum = Array(G).fill(4750);
  const newcombe = Array(G).fill(4750);
  let remaining = gap;
  for (let i=0; i<G && remaining>0; i++) {
    const delta = Math.min(remaining, 250);
    newcombe[i] += delta;
    remaining -= delta;
  }
  if (remaining !== 0) throw new Error('failed to construct example');
  const kMin = score(minimum,'0.95');
  const kN = score(newcombe,'0.95');
  const actual = adjudicateUniqueSecond(kMin,kN);
  if (kN-kMin !== gap || actual !== expected) throw new Error(`FAIL ${gap}: ${actual}`);
  console.log(`PASS gap=${gap} K_min=${kMin} K_N=${kN} case=${actual}`);
}
console.log('PASS 3/3 numerical boundary regression tests');
