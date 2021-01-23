// //console.log("Beep boop");

// const firstObj = {}; //valid object

// //objects are separated by commas. key-value pairs are key : value

// const user = {
//   username: 'biz.markie',
//   password: 'abc123',
//   lovesJavaScript: true,
//   favoriteNumber: 42, //requires comma after the last key-value pair
// }

// // Access values //

// // Method 1: DOT NOTATION
// // console.log(user.lovesJavaScript);
// // console.log(user.username);

// // uncaught reference error = looking for a variable, but none has been defined.
// // access a value in bracket notation, the value must be a variable, string, or number.
// const favoriteNumber = 42;
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// // ASSIGNING VALUES

// // const newUser = {
// //   isNew: true,
// // }

// // newUser.username = 'fresh.prince';
// // console.log(newUser)

// const newObject = {
//   sayHello: function () {
//     console.log(object)
//   }
// }

// //ITERATE OVER AN OBJECT

// const userTwo = {
//   username: 'holly.parsons',
//   password: 'fancycatz',
//   lovesJavascript: true,
//   favoriteNumber: 115,
// }

// for (let key in userTwo) {
//   console.log(key); //gives us the keys
//   console.log(userTwo[key]); //gives us the values; dot notation will not work here. 
// }

// //METHODS (functions as values)

// //THE DOM
// //ID's 
// "document.getElementById"
// //JS
// const div = document.getElementById('divId');

// const button = document.getElementById("main-btn");
// console.log(button);

2. //"document.querySelector"
//HTML
//<html>
  //<div id="diveId"></div>
//</html>
//JS
//const div = document.querySelector('#divId');

// const button = document.querySelector('#main-btn');
// console.log('button');

//"callbacks"
//-ability to pass a function as an argument to another function
//-convention is to use cb as variable

function saysHelloToUser(user) {
  return `Hello ${user}!`;
}
function saysGoodbyeToUser(user) {
  return `Goodbye ${user}!`;
}
function createGreeting (user, cb) {
  return cb(user);
}
createGreeting('Holly', saysHelloToUser);
createGreeting('Jack', saysGoodbyeToUser);
