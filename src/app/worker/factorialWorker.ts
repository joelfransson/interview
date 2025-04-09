/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const startNumber = BigInt(data);

  const factorial = (n: bigint): bigint => {
    if (n < 0n) return 0n;
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const result = factorial(startNumber);
  postMessage(result);
});
