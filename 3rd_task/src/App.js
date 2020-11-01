import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    likes: 0,
    
  }
  render() {
    return (
      
      <div>
        <header />
        <h1 className="likes">Total Likes:{this.state.likes}</h1>
        <button className="event-button">Add like</button>
        <button className="event-button">Remove like</button>
        <button className="event-button">Reset</button>
      </div>
    );
  }
}

export default App;