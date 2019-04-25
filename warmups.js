function sockMerchant(n, ar) {
  if (n <= 1) return 0;
  let sockCounter = {};
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    if (sockCounter[ar[i]] === undefined) {
      sockCounter[ar[i]] = 1;
    } else {
      sockCounter[ar[i]] += 1;
    }
  }
  console.log(sockCounter)
  Object.values(sockCounter).forEach(el => {
    if (el % 2 === 0) {
      result += el / 2
    } else {
      result += (el - 1) / 2
    }
  })
  return result;
}

function countingValleys(n, s) {
  let move = { 'U': 1, 'D': -1 };
  let prevStep = 0;
  let seaLevel = 0;
  let valley = 0;
  for (let i = 0; i < s.length; i++) {
    seaLevel += move[s[i]];
    if (seaLevel === -1 && prevStep === 0) {
      valley += 1;
    }
    prevStep = seaLevel;
  }

  return valley;
}

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