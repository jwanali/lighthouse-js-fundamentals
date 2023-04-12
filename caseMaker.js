const camelCase = (data) => {
  let result = '';

  for (let i = 0; i < data.length; i++) {  
    if (data[i] !== ' ') {
      if (data[i-1] === ' ') {
      result +=  data[i].toUpperCase();
      } else {
      result += data[i];
      }
    }
  }
  return  result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));