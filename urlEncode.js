var urlEncode = function (string) {
  let start = 0
  let end  = string.length -1;
  var newString = ''
  if (string[0] === ' ') {
    start = 1;
  }
  if (string[string.length-1] = ' ') {
end = string.length - 1;
  }
  for ( let index = start; index < end; index++) {
    if (string[index] === ' ') {
      newString = newString + '%20'
    } else {
      newString = newString + string[index];
    }
    
  }
  string = newString;
  return string;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


