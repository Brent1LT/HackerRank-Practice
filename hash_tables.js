function checkMagazine(magazine, note) {
  let possibleWords = createHash(magazine);
  let result = true;
  for (let i = 0; i < note.length; i++) {
    if (possibleWords[note[i]] === undefined) {
      result = false;
      break;
    }
    possibleWords[note[i]] -= 1;
    if (possibleWords[note[i]] < 0) result = false;
  }
  if (result) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

function createHash(arr) {
  let hash = {};
  arr.forEach(el => {
    if (hash[el] === undefined) {
      hash[el] = 0;
    }
    hash[el] += 1;
  });
  return hash;
}  

