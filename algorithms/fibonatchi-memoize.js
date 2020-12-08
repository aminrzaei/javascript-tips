function fibonatchi(n, memo = [0, 1]) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];
  const fiboN = fibonatchi(n - 1, memo) + fibonatchi(n - 2, memo);
  memo.push(fiboN);
  return fiboN;
}
console.time('answer time');
console.log(fibonatchi(1000));
console.timeEnd('answer time');
