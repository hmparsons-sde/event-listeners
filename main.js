// console.log("Beep boop");

// function saysHelloToDroid(droid) {
//   return `Hello ${droid}!`;
// }
// function pokesADroid(droid) {
//   return `Poke ${droid}!`;
// }
// function boopTheDroid(droid, cb) {
//   return cb(droid);
// }
// boopTheDroid('C3PO', saysHelloToDroid);
// boopTheDroid('C3PO', pokesADroid);
// console.log(boopTheDroid(saysHelloToDroid));
// console.log(boopTheDroid(pokesADroid));

//DOM Manipulation & Event Listeners are looking for callbacks and functions.

//EVENT LISTENERS

// const button = document.getElementById('main-btn');

const whatIsTheId = (e) => {
  return `The elementt ID is ${e.target.id}!`;
}
button.addEventListener('click', whatIsTheId);

// const button = document.querySelector('#main-btn');
// button.addEventListener('click', (event) => {
//   console.log(`YOU BOOPED ${event.target.id}!`);
//   console.log(event);
// })

//target 'other-btn' and on click, runwhatIsTheId
//you can add an event listener on any element in the dom
