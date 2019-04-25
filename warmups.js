function jumpingOnClouds(c) {
  let jumps = 0;
  let skip = false;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 1) {
      skip = false;
      continue;
    }
    if (skip) {
      skip = false;
      continue;
    }
    if (i !== 0) jumps += 1;
    if (c[i + 2] === 0) skip = true;
  }
  return jumps;
}