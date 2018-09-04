// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(a) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    if (a > 1000) reject(new Error('This time is too much !'));
    setInterval(() => {
      resolve(Date.now() - start);
    }, a);
  });
}

export function asyncDelay(b) {
  return delay(b);
}
