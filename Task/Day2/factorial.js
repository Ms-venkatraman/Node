function factorial(n) {
  if (typeof n !== 'number' || n < 0) return undefined;
  if (n === 0 || n === 1) return 1n;
  let res = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    res *= i;
  }
  return res; // BigInt
}
  console.log(factorial(5))
