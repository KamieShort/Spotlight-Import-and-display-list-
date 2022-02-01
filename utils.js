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
