const clearSnkr = document.querySelector('.clear-tasks');
const socks = document.querySelector('.card');
const cap = document.querySelector('h5');

// Click
clearSnkr.addEventListener('click', runEvent);
// Double Click
clearSnkr.addEventListener('doubleclick', runEvent);
// Mousedown
clearSnkr.addEventListener('mousedown', runEvent);
// Mouseup
clearSnkr.addEventListener('mouseup', runEvent);
// Mouse Enter
clearSnkr.addEventListener('mouseenter', runEvent);
// Mouse Leave
clearSnkr.addEventListener('mouseleave', runEvent);
// Mouse Over
clearSnkr.addEventListener('mouseover', runEvent);
// Mouse Out
clearSnkr.addEventListener('mouseout', runEvent);
// Mouse Move
socks.addEventListener('mousemove', runEvent);



function runEvent(m){

    console.log(`Shoe Type: ${m.type}`);

    heading.textContent = `MouseX: ${m.offsetX} MouseY: ${m.offsetY}`;

 document.body.style.background = `rgb(${m.offsetX}, ${m.offsetY}, 40)`
}

