import React, {Component} from 'react';
import Animal from './Components/Animal';
import "./App.css";

class App extends Component {

  state = {
    animals: [
      {id:1, name:"Dog", image:"https://source.unsplash.com/weekly?/dog"},
      {id:2, name:"Lion", image:"https://source.unsplash.com/weekly?/lion"},
      {id:3, name:"Cat", image:"https://source.unsplash.com/weekly?/cat"},
    ],
  };

  render () {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <Animal 
          key={animal.name} 
          name={animal.name} 
          image={animal.image} />
      );
    });
    return <div className="component-cards"> {animalsList} </div>;
    //   <div className="component-cards">
      
    //   <Animal 
    //   name={this.state.animals[0].name} 
    //   image={this.state.animals[0].image}
    //   />

    //   <Animal  
    //   name={this.state.animals[1].name} 
    //   image={this.state.animals[1].image}
    //   />

    //   <Animal  
    //   name={this.state.animals[2].name} 
    //   image={this.state.animals[2].image}
    //   />
      
    // </div>
    // );
  }
}



export default App;