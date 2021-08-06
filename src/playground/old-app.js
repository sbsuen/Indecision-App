console.log('App.js is running!');

//JSX - JavaScript XML
//Adjacent JSX elements must be wrapped in an enclosing tag (i.e. a <div>)

// If statements
// Ternary operators, basically a simple IF statement
// Logical AND operator, do one thing or nothing at all
// All work same as regular JavaScript

//Only render the subtitle and the p tags if subtitle exists
// Render new p tag - whether or not options.length > 0

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
  <ol>
    <li>Item One</li>
    <li>Item 2</li>
  </ol>
</div>
);

/*
var template = (
<div>
  <h1>Wazzup</h1>
  <p>This is some info</p>
  <ol>
    <li>Item One</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ol>
</div>
);
*/

const user = {
  name: 'Sebastian',
  age: 29,
  location: 'Toronto'
};

//Old way: function getLocation(){}

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  } else{
    return undefined;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

//Create a templateTwo var JSX expression
// div
// h1 -> Name
// p -> Age: my Age
// p -> Location:
// Render templateTwo instead of template

//JSX Babel Output in /scripts/ directory
const appRoot = document.getElementById('app'); //Find div with id="app"

ReactDOM.render(template, appRoot);
