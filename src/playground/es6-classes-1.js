//Setup constructor to take anme and age (default to 0)
//Get description - NAME is AGE year(s) old.

class Person{
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    if (this.name == "Slim Shady"){
      return `Hi my name is what? My name is who? My name is chicka chicka ${this.name}`;
    }
    //return 'Hi my name is ' + this.name;
    //Template string, better than concatenation
    return `Hi my name is ${this.name}`; //Use backtick, next to 1 on keyboard
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person{
  //No need to set up defaults, already done
  constructor(name, age, major) {
    super(name, age); //Call parent constructor function
    this.major = major;
  }

  hasMajor(){
    return !!this.major; //Logical NOT operator
  }
  getDescription(){
    let description = super.getDescription();

    if (this.hasMajor()){
      description += `. Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()){
      greeting += `. Home location is ${this.homeLocation}`;
    }
    return greeting;
  }
}

//Create a new subclass of person called Traveller
//Add support for homeLocation, 3rd argument
//Override getGreeting()
//1. If there is a home location, include that in the message
//Use the super method
//2. If there is no home location, just use the parent string

const me = new Traveller("Seb Suen", 29);
console.log(me);
console.log(me.getGreeting());

const slim = new Traveller("Slim Shady", 50, "Detroit");
console.log(slim);
console.log(slim.getGreeting());
