function removeSmallest(numbers) {
  // If you get an empty array/list, return an empty array/list.
  if (numbers.length == 0) {
    return numbers;
  }

  const min = Math.min(...numbers);

  // If there are multiple elements with the same value, remove the one with a lower index.
  const index = numbers.indexOf(min);
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i != index) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([]), []);
