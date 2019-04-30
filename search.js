function icecreamParlor(m, arr) {
  let collection = {};
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!collection[arr[i]]) {
      collection[arr[i]] = [i + 1];
    } else {
      collection[arr[i]].push(i + 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (m === arr[i]) continue;
    let test = m - arr[i];
    if (collection[test]) {
      if (test === arr[i]) {
        if (collection[test].length > 1) answer = answer.concat(collection[test]);
      } else {
        answer.push(i + 1);
        answer.push(collection[test][0]);
      }
    }
  }
  return answer.slice(0, 2);
}


