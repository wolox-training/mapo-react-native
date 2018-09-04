import isArray from './utils';

export function min(a, ...b) {
  if (!a) return undefined;
  if (isArray(a)) return Math.min(...a);
  return Math.min(a, ...b);
}

export function copy(b) {
  if (isArray(b)) return [...b];
  return { ...b };
}

export function reverseMerge(c, d) {
  return [...d, ...c];
}

export function filterAttribs({ a, b, ...e }) {
  return e;
}
