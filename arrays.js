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
