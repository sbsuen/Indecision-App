class VisiblityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility App',
      details: 'Here are some visible details',
      visibility: false
    };
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return{
        visibility: !prevState.visibility
      };
    });
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && <p>{this.state.details}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));
