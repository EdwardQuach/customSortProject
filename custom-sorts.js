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
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
