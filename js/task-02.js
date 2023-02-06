const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// console.log(ingredients);

const ingredientsConteiner = document.querySelector('#ingredients');
const addIngredients = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});

ingredientsConteiner.append(...addIngredients);
console.log(ingredientsConteiner);
