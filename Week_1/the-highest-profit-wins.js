function minMax(arr) {
  //Sort method uses unicode comparision for sorting array values.
  //CompareFunction is used to get through this pitfall
  arr.sort((a, b) => {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

function minMax(arr) {
  //if only 1 element in array return it as both min and max
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  let min, max;

  //if first element is greater than second element
  //then set min as second element and max as first element
  //else do the opposite
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    max = arr[1];
    min = arr[0];
  }
  arr.forEach(el => {
    //if element is less than current min set min to element value
    if (el < min) {
      min = el;
    }
    //else if element is greater than current max value set max to element value
    if (el > max) {
      max = el;
    }
  });
  return [min, max];
}

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([1]), [1, 1]);
