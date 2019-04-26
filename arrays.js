function hourglassSum(arr) {
  let highestSum;
  for (let i = 0; i < arr.length - 2; i++) {
    if (highestSum === undefined) {
      highestSum = highestRowMax(arr[i], arr[i + 1], arr[i + 2]);
    } else {
      let highest = highestRowMax(arr[i], arr[i + 1], arr[i + 2]);
      if (highest > highestSum) highestSum = highest;
    }
  }
  return highestSum;
}
//helper
function highestRowMax(row1, row2, row3) {
  let maxes = [];
  for (let i = 0; i < 4; i++) {
    let total = 0
    row1.slice(i, i + 3).forEach(el => total += el);
    total += row2[1 + i];
    row3.slice(i, i + 3).forEach(el => total += el);
    maxes.push(total);
  }
  return Math.max(...maxes);
}


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

// function minimumBribes(q) {
//   let swaps = 0;
//   let broken = false;
//   for (let j = 0; j < q.length; j++) {
//     let diff = q[j] - j;
//     if (diff > 3) {
//       broken = true;
//     } else if (diff > 0) {
//       swaps += diff - 1;
//     }else if(diff < -2){
//       swaps += Math.abs(diff) - 2;
//     }
//   }
//   if (broken) {
//     console.log('Too chaotic');
//   } else {
//     console.log(swaps);
//   }
// }

//attempt 2
//this one works!
function minimumBribes(q) {
  let swaps = 0;
  let sorted = false;
  let chaos = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < q.length; i++) {
      if (q[i + 1] === q.length) continue;
      if (q[i] - i > 3) {
        chaos = true;
        break;
      }
      if (q[i] > q[i + 1]) {
        swaps += 1;
        sorted = false;
        let temp = q[i];
        q[i] = q[i + 1];
        q[i + 1] = temp;
      }
    }
  }
  if (chaos) {
    console.log('Too chaotic');
  } else {
    console.log(swaps);
  }
}

function minimumSwaps(arr) {
  let sorted = false;
  let swaps = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i]
      if (i !== (current - 1)) {
        swaps += 1;
        let temp = arr[current - 1];
        arr[current - 1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }
  return swaps;
}

//HARD
//correct answer but too slow

// function arrayManipulation(n, queries) {
//   let arr = Array(n).fill(0);
//   let max = 0;
//   queries.forEach(query => {
//     let temp = arr.slice(query[0] - 1, query[1]).map(el => el + query[2]);
//     arr = arr.slice(0, query[0] - 1).concat(temp).concat(arr.slice(query[1]))
//   });
//   console.log(arr);
//   for (let k = 0; k < arr.length; k++) {
//     max = Math.max(max, arr[k]);
//   }

//   return max;
// }

// actual answer, still don't fully understand

function arrayManipulation(n, queries) {
  let arr = Array(n).fill(0);
  let max = 0;
  queries.forEach(query => {
    arr[query[0] - 1] += query[2];
    if (query[1] < arr.length) {
      arr[query[1]] -= query[2];
    }
  });

  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  console.log(arr);
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }

  return max;
}

