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

function repeatedString(s, n) {
  let extras = n % s.length;
  let count = 0;
  let sub = 0;
  if (extras !== 0) {
    for (let i = 0; i < extras; i++) {
      if (s[i] === 'a') count += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') sub += 1;
  }
  if (n <= s.length) {
    return count;
  } else {
    count += (Math.floor(n / s.length) * sub)
    return count;
  }
}

function maxStep(n, k) {
  // Write your code here
  let current = 0;
  let skip = false;
  for (let step = 1; step <= n; step++) {
    if (current + step === k) {
      current = 0;
      skip = true;
      break;
    } else {
      current += step;
    }
  }

  if (skip) {
    for (let step = 2; step <= n; step++) {
      current += step;
    }
  }
  return current;
}

function closestNumbers(numbers) {
  // Write your code here
  let min = Infinity;
  let answer = [];
  numbers.sort((a, b) => a - b);
  for (let i = 1; i < numbers.length - 1; i++) {
    let current = numbers[i];
    let prev = numbers[i - 1];
    let next = numbers[i + 1];
    if (Math.abs(current - prev) < min) min = Math.abs(current - prev);
    if (Math.abs(next - current) < min) min = Math.abs(next - current);
  }

  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let prev = numbers[i - 1];
    if (Math.abs(current - prev) === min) answer.push([prev, current]);
  }

  for (let i = 0; i < answer.length; i++) {
    let ans = answer[i];
    console.log(`${ans[0]} ${ans[1]}`)
  }
  // return answer;
}

function investment(s, e) {
  // Write your code here
  let ranges = [];
  for (let i = 0; i < s.length; i++) {
    ranges.push([s[i], e[i]]);
  }

  // sort ranges by smallest window
  ranges.sort((a, b) => {
    let first = a[1] - a[0];
    let second = b[1] - b[0];
    return first - second;
  })

  let set = new Set();
  for (let i = 0; i < ranges.length; i++) {
    let current = ranges[i];
    let created = false;
    for (let j = current[0]; j <= current[1]; j++) {
      if (created) break;
      if (!set.has(j)) {
        set.add(j);
        created = true;
      }
    }
  }

  return set.size
}