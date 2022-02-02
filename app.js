import { animals } from './animals.js';
import { foods } from './foods.js';
import { houses } from './houses.js';
import { renderAnimals, renderFoods, renderHouses } from './utils.js';

// let state
const animalList = document.getElementById('animals-list');

for (let animal of animals) {
    const div = renderAnimals(animal);
    animalList.append(div);
}

const foodList = document.getElementById('foods-list');

for (let food of foods) {
    const li = renderFoods(food);
    foodList.append(li);
}

const houseList = document.getElementById('house-list');

for (let salesData of houses) {
    const div = renderHouses(salesData);
    houseList.append(div);
}
