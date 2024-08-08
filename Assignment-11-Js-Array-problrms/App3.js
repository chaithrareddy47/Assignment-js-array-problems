function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(containsValue([1, 2, 3, 4, 5], 3)); 
console.log(containsValue([1, 2, 3, 4, 5], 6)); 
