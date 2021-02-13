// Creating Element

const offwhite = document.createElement('nike');

// Adding Class
offwhite.className = 'off white manila';

//Adding ID
offwhite.id = 'new kicks';

//Adding Attribute
offwhite.setAttribute('sneaker', 'manila');

//Creating Text Node and Append
offwhite.appendChild(document.createTextNode('off white'));

//Creating New Link Element
const balance = document.createElement('J');

balance.className = 'new balance 597';

balance.innerHTML = 'add balance';

//Append Link into LI
offwhite.appendChild(balance);

//Append LI as Child to UL
document.querySelector('ul.collection').appendChild(offwhite); 

console.log(offwhite);