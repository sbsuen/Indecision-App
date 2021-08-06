console.log('App.js is running!');

const app = {
  title: 'Toggle Visiblity App',
  details: 'Here are some details that are visible'
}

const appRoot = document.getElementById('app');

let showDetails = false;

const toggleDetails = () => {
  showDetails = !showDetails;
  renderVisibilityApp();
}

const renderVisibilityApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p>{app.details}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderVisibilityApp();
