import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    // console.log('addHandler was clicked');
    this.setState({likes:this.state.likes + 1});
  }
  removeHandler = () => {
    // console.log('removeHandler was clicked');
    this.setState({likes:this.state.likes - 1});
  }
  resetHandler = () => {
    // console.log('resetHandler was clicked');
    this.setState({likes: 0});
  }

  render() {
    return (
      
      <div>
        <header />
        <h1 className="likes">Total Likes:{this.state.likes}</h1>
        <button onClick={this.addHandler}>Add like</button>
        <button onClick={this.removeHandler}>Remove like</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;