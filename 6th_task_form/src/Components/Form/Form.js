import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
     

    render() {
        return (
            <div className="form-group">
                <h1>Form</h1>
                <div class="firstname">
                    <label htmlFor="firstname"> First Name </label>
                    <input type="text" id="firstname" onChange={this.props.changeHandler} />
                </div>
                <div class="lastname">
                    <label htmlFor="lastname"> Last Name </label>
                    <input type="text" id="lastname" onChange={this.props.changeHandler} />
                </div>
                <div class="phone">
                    <label htmlFor="phone-number"> Phone Number </label>
                    <input type="text" id="phone" onChange={this.props.changeHandler} />
                </div>
                <div class="msg">
                <label htmlFor="message"> Message </label>
                    <textarea type="text" id="message" onChange={this.props.changeHandler} />
                </div>
                <div class="roles">
                    <label htmlFor="role">Role </label>
                    <select type="text" id="role" onChange={this.props.changeHandler}> 
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <button>Send</button>
                
            </div>
        );
    }
}

export default Form;