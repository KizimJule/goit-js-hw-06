const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector(`#ingredients`);

// const vegetablesRef = ingredients.map(i => {
//   const itemRef = document.createElement(`li`);
//   itemRef.classList.add(`item`);
//   itemRef.textContent = i;
//   return itemRef;
// });

// ingredientsRef.prepend(...vegetablesRef);

const makeVegetablesRef = ingredients => {
  return ingredients.map(i => {
    const itemRef = document.createElement(`li`);
    itemRef.classList.add(`item`);
    itemRef.textContent = i;
    return itemRef;
  });
};
const vegetablesRef = makeVegetablesRef(ingredients);
ingredientsRef.prepend(...vegetablesRef);
