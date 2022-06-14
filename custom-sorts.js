function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  let oddArr = []
  let evenArr = []

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]
    if (ele % 2 === 0) { evenArr.push(ele) }
    else { oddArr.push(ele) }
  }

  let sortedOdd = oddArr.sort((a, b) => a - b)
  let sortedEven = evenArr.sort((a, b) => a - b)

  return [...sortedOdd, ...sortedEven]

  // return arr.sort((a, b) => {
  //   if (a % 2 === 0 && b % 2 === 0) { return a - b }
  //   else if (a % 2 !== 0 && b % 2 !== 0) { return a - b }
  //   else if (a % 2 !== 0 && b % 2 === 0) { return -1 }
  //   else if (a % 2 === 0 && b % 2 !== 0) { return 1 }
  // })

}

function validAnagrams(s, t) {
  let sArr = s.split("");
  let tArr = t.split("");

  sArr.sort();
  tArr.sort();

  let sStr = sArr.join("")
  let tStr = tArr.join("")
  return sStr === tStr;
}

function reverseBaseSort(arr) {
  let base1Arr = []
  let base2Arr = []
  let base3Arr = []

  let strArr = []
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]
    strArr.push(`${ele}`)
  }


  for (let i = 0; i < strArr.length; i++) {
    let ele = strArr[i]
    if (ele.length === 1) { base1Arr.push(arr[i]) }
    else if (ele.length === 2) { base2Arr.push(arr[i]) }
    else if (ele.length === 3) { base3Arr.push(arr[i]) }
  }

  base1Arr.sort((a, b) => a - b)
  base2Arr.sort((a, b) => a - b)
  base3Arr.sort((a, b) => a - b)

  return [...base3Arr, ...base2Arr, ...base1Arr]

}

function frequencySort(arr) {
  let freqObj = {};
  for (ele of arr) {
    if (freqObj[ele]) {
      freqObj[ele]++;
    } else {
      freqObj[ele] = 1;
    }
  }

  return arr.sort((a , b) => {
    if(a === b) return 0;
    else if (freqObj[a] > freqObj[b]) return 1;
    else if (freqObj[a] < freqObj[b]) return -1;
    else return b - a; 
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
