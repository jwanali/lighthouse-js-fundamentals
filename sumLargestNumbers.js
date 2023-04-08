var sumLargestNumbers = function (array) {
  var num1 = 0;
  var num2 = 0;
  var n = 0;
  if (array[0] >= array[1]) {
    num1 = array[0];
    num2 = array[1];
  } else {
    num1 = array[1];
    num2 = array[0];
  }
 
  for (let i = 2; i < array.length; i++) {
    if (array[i] >= num1) {
      n = num1;
      num1 = array[i];
      num2 = n;
    } else if (array[i] >= num2)

    num2 = array[i];
  }
  return num1 + num2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));