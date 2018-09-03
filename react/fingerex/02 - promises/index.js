// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(a) {
  const sign = Math.random() < 0.5 ? -1 : 1;
  const d = new Promise((resolve, reject) => {
    if (a < 2 * a) resolve(a + (sign * Math.floor(Math.random() * 101)));
    else reject(new Error('This time is too much !'));
  });
  return d;
}

export function asyncDelay(b) {
  const sign = Math.random() < 0.5 ? -1 : 1;
  return (b + (sign * Math.floor(Math.random() * 101)));
}
