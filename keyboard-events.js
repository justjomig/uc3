const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('task-title');
const select = document.querySelector('select');

// Clear Input
form.value = '';

form.addEventListener('submit', runEvent);

// Keydown
taskInput.addEventListener('keydown', runEvent);
// Keyup
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus
taskInput.addEventListener('focus', runEvent);
// Blur
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(m) {
    console.log(`Event Type: ${m.type}`);

    console.log(m.target.value);

    heading.innerText = m.target.value; 

    // Get Input Value
    console.log(taskInput.value);
}