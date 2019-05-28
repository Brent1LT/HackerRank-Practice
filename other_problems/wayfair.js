function solution(S) {
  var occurrences = new Array(26);
  for (var i = 0; i < occurrences.length; i++) {
    occurrences[i] = 0;
  }

  for (var id in S) {
    occurrences[S.charCodeAt(id) - "a".charCodeAt(0)]++;
  }

  var best_char = "a";
  var best_res = 0;

  for (var i = 0; i < 26; i++) {
    if (occurrences[i] > best_res) {
      best_char = String.fromCharCode("a".charCodeAt(0) + i);
      best_res = occurrences[i];
    }
  }

  return best_char;
}

function solution(arr) {
  // write your code in JavaScript (Node.js 8.9.4)
  let strokeAmount = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      strokeAmount += arr[i] - arr[i - 1];
      if (strokeAmount > 1000000000) return -1;
    }
  }

  return strokeAmount;
}

function solution(arr) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (arr.length === 1) return arr[0] * 2;
  let largestSum = -Infinity;
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 !== pointer2) {
    let sum1 = arr[pointer1] * 2;
    let sum2 = arr[pointer2] * 2;
    let combinedSum = arr[pointer1] + arr[pointer2] + (pointer2 - pointer1);
    let potentialMax = Math.max(sum1, sum2, combinedSum);
    largestSum = potentialMax > largestSum ? potentialMax : largestSum;

    if (sum1 < sum2) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return largestSum;
}
