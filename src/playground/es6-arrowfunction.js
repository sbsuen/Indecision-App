//ES5 function defined by variable
//Function can have a name if not assigned to variable

//const square = function (x) {
  //return x * x;
//};

//ES6 Arrow function
//Arrow functions must be assigned by variable
//const squareArrow = (x) => {
//  return x * x;
//};

//More concise version of the above
//Implicitly returned, not explicitly returned
//const squareArrow = (x) => x * x;

//console.log(squareArrow(12));

//CHALLENGE - create getFirstName function from previous lecture
//Create regular arrow function
//Create second one using expression syntax

//if (fullName){
  //let firstName = fullName.split(' ')[0];
  //console.log(firstName);
//}

const getFirstNameVerbose = (name) => {
  return (name && name.split(' ')[0]);
};

console.log(getFirstNameVerbose('Micah Bass'));

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName('Sebastian Suen'));
