// eslint-disable-next-line no-unused-vars
import { renderAnimals, renderFoods } from '../utils.js';

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

test('renderFoods should return an array with food items', (expect) => {
    const expected = 'pizza';

    const actual = renderFoods('pizza', 'sushi', 'steak');

    expect.deepEqual(actual.innerText, expected);
});
