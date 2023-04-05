const lastIndexOf = function (anArray,value) {
    var last = -1;
    for (let index = 0; index < anArray.length; index++) {
        if (anArray[index] === value) {
            last =  index;
        };
        
    }
    return last;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);