import React, { Component } from 'react';
import Form from './Components/Form/Form'
import View from './Components/View/View'

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone:"",
    message:"",
    role:""
  };
  
  render() {
    return (
      <div>
        <Form />

        <View 
        firstname={this.state.firstname} 
        lastname={this.state.lastname} 
        phone={this.state.phone} 
        message={this.state.message} 
        role={this.state.role}/>
      </div>
    );
  }
}

export default App;