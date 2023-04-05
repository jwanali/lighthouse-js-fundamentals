function range (start,end,step) {
    if (start === undefined || end  === undefined || step === undefined) {
        return [];
    } else if (end < start) {
        return [];
    }else if (step <= 0) {
        return [];
    } else {
        var element = start;
        var newArray = [start];
        var arrayLenght = Math.round((end - start) / step) ;
        for (let index = 0; index < arrayLenght; index++) {

            element = element + step;
            newArray.push(element);
            
        }
        return newArray;
    }
}

var newArray = range(25,75,3);
console.log(newArray);