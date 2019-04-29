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


let sorted = filledInSpaces.sort();
let result = 0;
let currentCount = 0;
for (let i = 0; i < sorted.length; i++) {
  if (i === sorted.length - 1) {
    currentCount += 1;
    if (currentCount > result) return currentCount;
    return result;
  }
  currentCount += 1;
  let currentSpace = sorted[i];
  let nextSpace = sorted[i + 1];
  if (!checkAdjacent(currentSpace, nextSpace)) {
    result = currentCount > result ? currentCount : result;
    currentCount = 0;
  }
}

function checkAdjacent(spaceOne, spaceTwo) {
  if (Math.abs(spaceTwo[0] - spaceOne[0]) === 1 && Math.abs(spaceTwo[1] - spaceOne[1]) === 0) return true;
  if (Math.abs(spaceTwo[0] - spaceOne[0]) === 0 && Math.abs(spaceTwo[1] - spaceOne[1]) === 1) return true;
  return false;
}

//real answer

function largestConnectedComponent(size, filledInSpaces) {
  if (filledInSpaces.length === 0) return 0;
  let q = [];
  let result = 0;
  let currentCount = 0;
  let shaded = {};
  let visited = {};
  for (let i = 0; i < filledInSpaces.length; i++) {
    shaded[filledInSpaces[i]] = true;
  }

  for (let i = 0; i < filledInSpaces.length; i++) {
    if (!visited[filledInSpaces[i]]) {
      currentCount = 0;
      q.push(filledInSpaces[i]);
      while (q.length > 0) {
        let current = q.shift();
        if(visited[current]) continue;
        currentCount += 1;
        visited[current] = true;
        let neighbors = checkAdjacent(current, shaded, visited);
        q.push(...neighbors);
      }
      result = currentCount > result ? currentCount : result;
    }
  }
  return result;
}

function checkAdjacent(space, shaded, visited) {
  let top = [space[0], space[1] + 1];
  let bottom = [space[0], space[1] - 1];
  let left = [space[0] - 1, space[1]];
  let right = [space[0] + 1, space[1]];
  let result = [];
  if (shaded[top] && !visited[top]) result.push(top);
  if (shaded[bottom] && !visited[bottom]) result.push(bottom);
  if (shaded[left] && !visited[left]) result.push(left);
  if (shaded[right] && !visited[right]) result.push(right);
  return result;
}