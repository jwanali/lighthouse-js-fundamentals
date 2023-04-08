var numberOfVowels = function (params) {
  var sum = 0;
  for (let index = 0; index < params.length; index++) {
   
  switch (params[index]) {
    case 'a':
      sum += 1;
    break;
    case 'A':
      sum += 1;
    break;
    case 'e':
      sum += 1;
    break;
    case 'E':
      sum += 1;
    break;
    case 'i':
      sum += 1;
    break;
    case 'I':
      sum += 1;
    break;
    case 'o':
      sum += 1;
    break;
    case 'O':
      sum += 1;
    break;
    case 'u':
      sum += 1;
    break;
    case 'U':
      sum += 1;
    break;
     
    default:
      break;
  }
}
return sum
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));