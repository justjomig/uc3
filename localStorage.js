// Set Local Storage Item   

localStorage.setItem('brand', 'NIKE');
localStorage.setItem('quality', '10/10');

// // Set Session Storage Item

// sessionStorage.setItem('brand', 'ADIDAS')

// // Remove from Storage
// localStorage.removeItem('brand');

// Get from Storage
const brand = localStorage.getItem('brand');
const quality = localStorage.getItem('quality');

// Clear Local Storage
// localStorage.clear();
// console.log(brand, quality);

document.querySelector('form').addEventListener('submit', function(m){
    m.preventDefault();

    const task = document.querySelector('#task').value;

    let tasks;
if(localStorage.getItem('tasks') === null){
   tasks = [];
}else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));

    // console.log(task);

    alert('SAVED');
    tasks.forEach(function(task){
console.log(task);
    });
});