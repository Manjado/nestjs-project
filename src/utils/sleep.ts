export function sleep() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('Hello, World'), 5000),
  );
}
