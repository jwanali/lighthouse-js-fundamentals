
const repeatNumbers = (data) => {
  let string = '';
for (let i = 0; i < data.length; i++) {
  let result = '';
  for (let n = 0; n < data[i][1]; n++) {
    result += data[i][0];
  }
  if (data.length > 0 && i < data.length -1) {
    string = string +  result + ', '  ;
  } else {
    string = string + result;
  }
  

}
return string;
} 
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));