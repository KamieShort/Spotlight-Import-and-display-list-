/* eslint-disable no-unused-vars */
import { animals } from './animals.js';
import { foods } from './foods.js';
import { houses } from './houses.js';
import { cookies } from './cookies.js';

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

export function renderFoods(food) {
    const li = document.createElement('li');
    li.textContent = food;
    return li;
}

export function renderHouses(houses) {
    const div = document.createElement('div');
    div.classList.add('houses');
    div.classList.add('salesData');

    const h2 = document.createElement('h2');
    h2.textContent = houses.type;

    const img = document.createElement('img');
    img.src = `./assets/${houses.img}`;

    const p = document.createElement('p');
    p.textContent = `${houses.type} homes are colored ${houses.salesData.color} and have a price of ${houses.salesData.price}.`;
    div.append(h2, img, p);
    return div;
}

// export function renderCookies(cookie) {
//     const array = document.createElement('array');
//     array.textContent = cookie;
//     return array;
// }

export function renderCookies(cookie) {
    return ['butter', 'sugar', 'vanilla', 'chocolate chips', 'egg', 'flour'];
}
