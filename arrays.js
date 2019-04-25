function rotLeft(a, d) {
  let shift;
  if (d > a.length) {
    shift = d % a.length;
  } else {
    shift = d;
  }
  let shifted = a.slice(shift)
  let ending = a.slice(0, shift)
  return shifted.concat(ending)
}