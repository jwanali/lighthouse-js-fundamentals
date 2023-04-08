var conditionalSum = function (array, condition) {
  var sum = 0;
  switch (condition) {
    case 'even':
      for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
          sum += array[index];
        }
        
      }
      break;
    case 'odd':
      for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 !== 0) {
          sum += array[index];
        }
        
      }

      
      break;
  
    default:
      break;
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));









