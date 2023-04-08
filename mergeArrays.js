const merge = function (array1,array2) {
  var newArray1 = array1;
  var newArray2 = array2;
  var newArray = [];
  var sortFunction = function (newArray1,newArray2) {
    if (newArray1.length === 0 ) {
      if (newArray2.length === 0) {
        return newArray;
      } else {
        for (var i = 0; i < newArray2.length; i++) {
          newArray.push(newArray2[i]);

        }
        return newArray;
      }
    } else if (newArray2.length === 0) {
      for (var i = 0; i < newArray1.length; i++ ) {
        newArray.push(newArray1[i]);
      }
      return newArray;
    } else {
      if (newArray1[0] > newArray2[0]) {
        newArray.push(newArray2[0]);
        newArray2.shift();
        sortFunction(newArray1,newArray2);
        return newArray;
      }else {
        newArray.push(newArray1[0]);
        newArray1.shift();
        sortFunction(newArray1,newArray2);
        return newArray;
      }
    }

   
  }
  return sortFunction(newArray1,newArray2);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);