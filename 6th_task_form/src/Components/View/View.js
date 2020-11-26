import React, { Component } from 'react';
import './View.css'

class View extends Component {
    render() {
        return (
            <div>
                <h1>Check your input</h1>
                <div className="view">
                    
                    <div id="firstname"> First Name {this.props.firstname}</div>
                    <div id="lastname"> Last Name {this.props.lastname}</div>
                    <div id="phoneNumber"> Phone Number {this.props.phone}</div>
                    <div id="message"> Message {this.props.message}</div>
                    <div id="role"> Role {this.props.role}</div>
                   
                </div>
            </div>
        );
    }
}

export default View;