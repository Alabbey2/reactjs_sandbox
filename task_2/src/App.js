import React, {Component} from "react";
import './App.css';
import Animal from './Component/Animal/Animal';


class App extends Component {
  state = {
  animals: [
    { name: "Lion", img:"https://source.unsplash.com/300x200/?lion"},
     {name: "Tiger", img:"https://source.unsplash.com/300x200/?tiger"},
    { name: "Dog", img:"https://source.unsplash.com/300x200/?dog"},
  ],
};


  render () {
    return (
      <div className="cards">
    
      <Animal 
      name={this.state.animals[0].name} 
      img={this.state.animals[0].img} 
      />
      <Animal 
      name={this.state.animals[1].name} 
      img={this.state.animals[1].img} 
      />
      <Animal 
      name={this.state.animals[2].name} 
      img={this.state.animals[2].img}  
      />
      
     </div>
     );
  }
}




export default App;
