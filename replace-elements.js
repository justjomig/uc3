//Replacing Elements

// Create Element
const newHeading = document.createElement('Sneakers');

//Adding ID
newHeading.id = 'Sneaker Menu';
//New Text Node
newHeading.appendChild(document.createTextNode('Sneaker Gone'));
//Get  the Old Head
const oldHeading = document.querySelector('#task-title');
//Parent
const cardAction = document.querySelector('.card-action'); 
//Replace
cardAction.replaceChild(newHeading, oldHeading);
//Remove List Item
const sneakerss = document.querySelectorAll('li');
const hype = document.querySelector('ul');
//Removing List Item
sneakerss[1].remove();
//Remove Child Element
hype.removeChild(sneakerss[0]);
//Classes and Attribute
const firstKicks = document.querySelector('li:first-child');
const wrath = firstKicks.children[0];

let value;

//Classes
value = wrath.className;
value = wrath.classList;
value = wrath.classList[0];
wrath.classList.add('force');
wrath.classList.remove('force');

//Attributes
value = wrath.getAttribute('href');
value = wrath.setAttribute('href', 'http://soleacademy.com');
greed.setAttribute('title', 'Sole Acadamy');
value = wrath.hasAttribute('titles');
value = wrath;

console.log(wrath);