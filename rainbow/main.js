const btn = document.getElementById('button'); // pulling an id from another document

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {

document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);














// what was does here by order:  create variable called 'btn' then sue document.getElementById func. to find the HTML element wit hID of btn
// cont-   .. this is then assigned to btn variable.  then create another variable called rainbow we then added an arraw and filled it. then created a function called 'change'
//cont-- .. thsi sets the background color of the body element to one of the colors of the rainbow.
//this involves selecting a random number using the buitl-in Math object and selecting the corresponding color in the array
// we the nlast of all created an event handler, which checks vfor when the button is clicked on
