// Event Bubbling
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('working');
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('working too');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('OFF');
});

document.querySelector('.col').addEventListener('click', function(){
    console.log('WHITE');
});

// Event Delegation

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem)

function deleteItem(m){
 if(m.target.parentElement.className === 'delete-item secondary-content'){
     console.log('Deleted');
 }

 if(m.target.parentElement.classList.contains('delete-item')){
console.log('Deleted Item');
m.target.parentElement.remove();
 }
}