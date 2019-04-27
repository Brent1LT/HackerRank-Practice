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

function twoStrings(s1, s2) {
  console.log(s1, s2)
  let string1 = s1.split('');
  let string2 = s2.split('');
  let hash = createSubset(string1);

  for (let i = 0; i < string2.length; i++) {
    if (hash[string2[i]]) {
      return 'YES';
    }
  }
  return 'NO';
}

function createSubset(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }
  return hash;
}