const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

// const markup = ingredients.map(technology => `<li class="item">${technology}</li>`).join('');

// list.insertAdjacentHTML('beforeend', markup);

const liPotatoes = document.createElement('li');
liPotatoes.classList.add('item');
liPotatoes.textContent = ingredients[0];
const liMushrooms = document.createElement('li');
liMushrooms.classList.add('item');
liMushrooms.textContent = ingredients[1];
const liGarlic = document.createElement('li');
liGarlic.classList.add('item');
liGarlic.textContent = ingredients[2];
const liTomatos = document.createElement('li');
liTomatos.classList.add('item');
liTomatos.textContent = ingredients[3];
const liHerbs = document.createElement('li');
liHerbs.classList.add('item');
liHerbs.textContent = ingredients[4];
const liCondiments = document.createElement('li');
liCondiments.classList.add('item');
liCondiments.textContent = ingredients[5];

list.append(liPotatoes, liMushrooms, liGarlic, liTomatos, liHerbs, liCondiments);
