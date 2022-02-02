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
    li.innerText = food;
    return li;
}

import { houses } from './houses';

export function renderHouses(house) {
    const div = document.createElement('div');
    div.classList.add('house');

    const h2 = document.createElement('h2');
    h2.textContent = house.type;

    const img = document.createElement('img');
    img.src = `./assets/${house.img}`;

    const p = document.createElement('p');
    p.textContent = `${house.type} are ${house.color} colored and have a price of ${house.price}.`;
    div.append(h2, img, p);
    return div;
}
