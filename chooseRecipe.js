const inBakery = (recipesIngrediant, bakery) => {
  for (let n = 0; n < bakery.length; n++) {
    if (recipesIngrediant === bakery[n]) {
      return true
    } 
  }
  return false
}






const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  
  for (let i = 0; i < recipes.length; i++) {
    if (( inBakery(recipes[i].ingredients[0], bakeryA) && inBakery(recipes[i].ingredients[1], bakeryB)) || ( inBakery(recipes[i].ingredients[1], bakeryA) && inBakery(recipes[i].ingredients[0], bakeryB))) {
      return recipes[i].name ;
    }
  }
  
  return ('sorry'); 
  
  
  // Code here!
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

