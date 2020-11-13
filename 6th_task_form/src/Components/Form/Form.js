import React, { Component } from 'react';

class Form extends Component {
    state = {
        value: "",
    };
    changeValueHandler = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.submitHandler}>
                    <div class="firstname">
                        <label htmlFor="firstname">First Name </label>
                        <input type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    </div>
                    <div class="lastname">
                        <label htmlFor="lastname">Last Name </label>
                        <input type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    </div>
                    <div class="phone">
                        <label htmlFor="lastname">Phone Number </label>
                        <input type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    </div>
                    <div class="message">
                        <label htmlFor="message">Message </label>
                        <textarea type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    </div>
                    <div class="role">
                        <label htmlFor="role">Role </label>
                        <select type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    </div>
                    
                </form>    
                
                <p>Text from input: {this.state.value} </p>
            </div>
        );
    }
}

export default Form;