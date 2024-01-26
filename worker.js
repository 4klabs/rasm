function fibonacci(element, memo = {}) {
  if (element < 3) return 1;
  if (element in memo) return memo[element];

  memo[element] = fibonacci(element - 1, memo) + fibonacci(element - 2, memo);

  return memo[element];
}

self.onmessage = (event) => {
  const number = event.data;
  const result = fibonacci(number);
  postMessage(result);
};
