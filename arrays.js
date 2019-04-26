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