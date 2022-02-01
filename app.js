import { animals } from './animals.js';
import { renderAnimals } from './utils.js';

// let state
const animalList = document.getElementById('animals-list');

for (let animal of animals) {
    const div = renderAnimals(animal);
    animalList.append(div);
}

import { foods } from './foods.js';
import { renderFoods } from './utils.js';

const foodList = document.getElementById('foods-list');

for (let food of foods) {
    const li = renderFoods(food);
    foodList.append(li);
}
