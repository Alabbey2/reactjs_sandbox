import React, { Component } from 'react';
import Form from './Components/Form/Form'
import View from './Components/View/View'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: "",
        lastname: "",
        phone:"",
        message:"",
        role:""
      }
    }

    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  
  render() {
    return (
      <div>
        <Form 
            changeHandler={this.handleChange}
        />
        <View 
            firstname={this.state.firstname} 
            lastname={this.state.lastname} 
            phone={this.state.phone} 
            message={this.state.message} 
            role={this.state.role}
        />

        
      </div>
    );
  }
}


export default App;