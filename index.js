function hasTargetSum(array, target) {
  // Step 1: Create an empty set to store unique numbers
  const uniqueNumbers = new Set();

  // Step 2: Iterate through the array
  for (const num of array) {
    // Step 3: Calculate the difference
    const difference = target - num;

    // Step 4: Check if the difference is in the set
    if (uniqueNumbers.has(difference)) {
      return true;
    }

    // Step 5: Add the current integer to the set
    uniqueNumbers.add(num);
  }

  // Step 6: If no pair is found, return false
  return false;
}

/* 
  Time complexity is O(n), where n is the length of the input array.
*/

/*
  1. Create an empty set `uniqueNumbers` to store unique numbers.
  2. Iterate through the `array` of integers.
    a. Calculate the difference as `target - num`.
    b. Check if the `difference` is in the set `uniqueNumbers`.
    c. If it is, return true.
    d. If not, add the current integer `num` to the set `uniqueNumbers`.
  3. If no pair is found during the iteration, return false.
*/

/*
  We create an empty set `uniqueNumbers` to store unique numbers in the array. This set helps us keep track of the numbers we've encountered during the iteration.

  We iterate through the array of integers, where `num` represents the current integer.
  
  - In step 2a, we calculate the difference between the `target` and the current `num`, storing it in the variable `difference`.
  - In step 2b, we check if the `difference` is already in the `uniqueNumbers` set. If it is, this means we've found a pair that adds up to the target, so we return `true`.
  - In step 2c, we add the current integer `num` to the `uniqueNumbers` set if it's not already in the set.
  - If we complete the iteration without finding a pair that adds up to the target, we return `false`.

  This approach ensures that we only iterate through the array once and efficiently identifies pairs that add up to the target. The set data structure allows for fast lookups, making the overall time complexity of the function O(n).
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
