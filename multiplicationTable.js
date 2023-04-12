const multiplicationTable = (maxValue) => {
  let result = '';
  for (let i = 1 ; i <= maxValue; i++) {
    for (let n = 1 ; n <= maxValue; n++){
      result += ' ' + n * i; 
    }
    result += '\n' + '\n'; 
  }
  return result;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));