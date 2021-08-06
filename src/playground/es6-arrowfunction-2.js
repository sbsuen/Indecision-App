//Arguments object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
}

const addArrow = (a, b) => {
  //console.log(arguments); Cannot use this
  return a + b;
}

console.log(add(55,1, 1001));
console.log(addArrow(55,1, 1001));

const user = {
  name: 'Seb',
  cities: ['Hong Kong', 'Los Angeles', 'Toronto'],
  printPlacesLived() {
    console.log(this.name);
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    //const that = this; //Workaround if this is bound in ES5
    /*
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });*/
  }
}
console.log(user.printPlacesLived());

//Challenge time:

const multiplier = {
  numbers     : [1, 2, 3, 4, 5, 6, 7, 8, 9],
  multiplyBy  : 25,
  multiply() {
    return this.numbers.map( (number) => number * this.multiplyBy );
  }
  // multiplyBy - single number
  // multiply - return a new array where numbers have been multiplied
}

console.log(multiplier.multiply());
