// score: 
function organizeChristmasDinner(dishes) {
  const ingredients = {};

  for (let [dish, ...dishIngredients] of dishes) {
    for (let ingredient of dishIngredients) {
      ingredients[ingredient] 
        ? ingredients[ingredient].push(dish)
        : ingredients[ingredient] = [dish];
    }
  }

  let result = [];

  for (let ingredient in ingredients) {
    ingredients[ingredient].length > 1
      ? result.push([ingredient, ...ingredients[ingredient].sort()])
      : '';
  }

  result.sort((a, b) => a[0].localeCompare(b[0]));
  return result;
}

// score: 140
// function organizeChristmasDinner(dishes) {
//   const ingredients = {};

//   for (const [dish, ...dishIngredients] of dishes) {
//     for (const ingredient of dishIngredients) {
//       if (ingredients[ingredient]) {
//         ingredients[ingredient].push(dish);
//       } else {
//         ingredients[ingredient] = [dish];
//       }
//     }
//   }

//   const result = [];

//   for (const ingredient in ingredients) {
//     if (ingredients[ingredient].length > 1) {
//       result.push([ingredient, ...ingredients[ingredient].sort()]);
//     }
//   }

//   result.sort((a, b) => a[0].localeCompare(b[0]));
//   return result;
// }

module.exports = organizeChristmasDinner;

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));