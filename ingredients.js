const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let n = 0;
console.log('<<<<<<<<<<<<<<<while loop>>>>>>>>>>>>>>>>>')
while (n < ingredients.length ) {
    console.log(ingredients[n]);
    n++;
}
console.log('<<<<<<<<<<<<<<<<<<<<<<for loop>>>>>>>>>>>>>>>>>>>>')

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
    const element = ingredients[i];
    console.log(element);
    
}
console.log('<<<<<<<<<<<<<<<<<printing ingrediants backwards>>>>>>>>>>>>>>>>>>')
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length-1; i >= 0 ; i--) {
    const element = ingredients[i];
    console.log(element);
    
}