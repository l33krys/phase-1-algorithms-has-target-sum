function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
     let total = array[i] + array[j]
      if (total === target) {
        //console.log(i, j)
      return true
      } 
    } 
  } 
    return false
 }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  start with target number and subtract first number
  check remaining numbers for that number
  if none exist start with target again and subtract third number
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
