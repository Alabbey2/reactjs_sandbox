import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'



class App extends Component {
  state = {
    likes: 0,
    date:""
  };
  bgColor = (likes) => {
    if (likes%2===0){
      return{
        backgroundColor: "red"
      }
    }
    else{
      return{
        backgroundColor: "green"
      }
    }
  } 
  addHandler = () => {
    let {likes} = this.state;
    likes = likes + 1;
    // console.log('addHandler was clicked');
    this.setState({likes});
    
  }
  removeHandler = () => {
    let {likes} = this.state;
    if (likes > 0) {
      likes = likes - 1;
      this.setState({likes});
    }
    
    // console.log('removeHandler was clicked');
    
  }
  resetHandler = () => {
    // console.log('resetHandler was clicked');
    this.setState({likes: 0});
  }

  render() {
    const {likes} = this.state;
    return (
      
      <div className="main">
        <Header />
        <div className="wrapper" style={this.bgColor(likes)}>
        <h1 className="likes">Total Likes:{likes}</h1>
        <button onClick={this.addHandler}>Add like</button>
        <button onClick={this.removeHandler}>Remove like</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;