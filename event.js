document.querySelector('.clear-tasks').addEventListener('click', function(){
    console.log('DELETED');
});

document.querySelector('.clear-tasks').addEventListener('click', onClick );

function onClick(a){
//  console.log('FINISHED');
 let offwhite;

 offwhite = a;

// Event Target Element
offwhite = a.target
offwhite = a.target.id;
offwhite = a.target.className;
offwhite = a.target.classList;

// Event Type
offwhite = a.type;

// Timestamp
offwhite = a.timeStamp;

// Coords Event Relative to The Window
offwhite = a.clientY;
offwhite = a.clientX;

// Coords Event Relative to The Element
offwhite = a.offsetY;
offwhite = a.offsetX;





 console.log(offwhite);
}