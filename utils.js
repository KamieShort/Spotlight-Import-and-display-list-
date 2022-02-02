/* eslint-disable no-unused-vars */
import { animals } from './animals.js';

export function renderAnimals(animals) {
    const div = document.createElement('div');
    div.classList.add('animals');

    const h2 = document.createElement('h2');
    h2.textContent = animals.type.toUpperCase();

    const img = document.createElement('img');
    img.src = `./assets/${animals.img}`;

    const p = document.createElement('p');
    p.textContent = `${animals.class} with ${animals.numberOfLegs} legs and a cuteness rating of ${animals.cuteness}.`;
    div.append(h2, img, p);
    return div;
}

import { foods } from './foods.js';

export function renderFoods(food) {
    const li = document.createElement('li');
    li.textContent = food;
    return li;
}

import { houses } from './houses.js';

export function renderHouses(houses) {
    const div = document.createElement('div');
    div.classList.add('houses');

    const h2 = document.createElement('h2');
    h2.textContent = houses.type;

    const img = document.createElement('img');
    img.src = `./assets/${houses.img}`;

    const p = document.createElement('p');
    p.textContent = `${houses.type} homes are colored ${houses.color} and have a price of ${houses.price}.`;
    div.append(h2, img, p);
    return div;
}
