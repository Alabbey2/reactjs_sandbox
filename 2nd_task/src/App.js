import React, {Component} from 'react';
import Animal from './Components/Animal';
import "./App.css";

class App extends Component {

  state = {
    animals: [
      { name:"Dog", image:"https://source.unsplash.com/weekly?/dog"},
      { name:"Lion", image:"https://source.unsplash.com/weekly?/lion"},
       {name:"Cat", image:"https://source.unsplash.com/weekly?/cat"},
    ],
  };

  render () {
    return (
      <div className="component-cards">
      
      <Animal 
      name={this.state.animals[0].name} 
      image={this.state.animals[0].image}
      />

      <Animal  
      name={this.state.animals[1].name} 
      image={this.state.animals[1].image}
      />

      <Animal  
      name={this.state.animals[2].name} 
      image={this.state.animals[2].image}
      />
      
    </div>
    );
  }
}



export default App;