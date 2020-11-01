import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
               <h1>Counter</h1> 
        <p>{new Date().toString()}</p>
            </div>
        );
    }
}

