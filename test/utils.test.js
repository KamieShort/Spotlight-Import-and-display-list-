// eslint-disable-next-line no-unused-vars
import { renderAnimals, renderFoods, renderHouses, renderCookies } from '../utils.js';

const test = QUnit.test;

test('renderAnimals should return a <div> with animal info', (expect) => {
    const expected = `<div class="animals"><h2>DOG</h2><img src="./assets/dog.jpg"><p>mammals with 4 legs and a cuteness rating of 100.</p></div>`;

    const actual = renderAnimals({
        type: 'dog',
        numberOfLegs: 4,
        class: 'mammals',
        cuteness: 100,
        img: 'dog.jpg',
    });

    expect.equal(actual.outerHTML, expected);
});

test('renderFoods should return a <li> with food item', (expect) => {
    const expected = `<li>pizza</li>`;

    const actual = renderFoods('pizza');

    expect.deepEqual(actual.outerHTML, expected);
});

test('renderHouses should return a nested object with data sales info', (expect) => {
    const expected = `<div class="houses salesData"><h2>Stick Built</h2><img src="./assets/bluestick.jpg"><p>Stick Built homes are colored blue and have a price of $300,000.</p></div>`;

    const actual = renderHouses({
        type: 'Stick Built',
        salesData: {
            color: 'blue',
            price: '$300,000',
        },
        img: 'bluestick.jpg',
    });
    expect.equal(actual.outerHTML, expected);
});

// test('renderCookies should return an array with ingredient items', (expect) => {
//     const expected = ['butter'];

//     const actual = renderCookies('butter');

//     expect.equal(actual.outerHTML, expected);
// });
