// BEST PRACTICE:
// Only use const if never reassigning
// Use let only when reassigning
// Const and let will be used extensively

var nameVar = 'Seb';
var nameVar = 'Micah'; //Var can be redefined and reassigned

console.log('nameVar', nameVar);

let nameLet = 'Michael';
nameLet = 'Seb'; //let can be reassigned but not redefined in ES6
console.log('nameLet', nameLet);

const nameConst = 'Constance'; //const cannot be redefined or reassigned
console.log('nameConst', nameConst);

function getPetName(){
  const petName = 'Toby';
  return petName;
}

//Variables inside functions only exist within that scope

//Block scoping: Let and const can be scoped to if statements and loops
//If let/const is defined outside of if/loop then it exists within the child scope

console.log(getPetName());

let fullName = 'Seb Suen';

if (fullName){
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
