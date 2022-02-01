import { animals } from './animals.js';
import { renderAnimals } from './utils.js';

// let state
const animalList = document.getElementById('animals-list');

for (let animal of animals) {
    const div = renderAnimals(animal);
    animalList.append(div);
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
