function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(findIndex([10, 20, 30, 40, 50], 60)); // Output: -1
