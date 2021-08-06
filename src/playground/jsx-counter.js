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

//HTML class attributes must use className in JSX
//All HTML attributes should be camelCased except aria-* and data-*
let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const subtractOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

//JSX Babel Output in /scripts/ directory
const appRoot = document.getElementById('app'); //Find div with id="app"

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
