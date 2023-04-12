/*for (n = 100; n <= 200; n++) {
    if ((n % 3 === 0) &&(n % 4 ===0)) {
        console.log("LoopyLighthouse");
    } else if (n % 3 === 0) {
        console.log("Loopy");
    } else if (n % 4 ===0) {
        console.log("Lighthouse")
    } else {
        console.log(n)
    }
}*/
let loopyLighthouse = function(range, multiples, words) {
 
    for (let n = range[0]; n <= range[1]; n++) {
        if ((n % multiples[0] === 0) && (n % multiples[1] === 0)) {
            console.log(words[0] + words[1]);
        } else if (n % multiples[0] === 0) {
            console.log(words[0]);
        } else if (n % multiples[1] === 0) {
            console.log(words[1])
        } else {
            console.log(n)
        }
    } 
}