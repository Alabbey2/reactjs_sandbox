import React, { Component } from 'react';
import Circle from './Components/Circle/Circle'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Speedgame</h1>
        <p>Your score is:</p>
        <button>STart</button>
        <button>End</button>
      </div>
    );
  }
}

export default App;