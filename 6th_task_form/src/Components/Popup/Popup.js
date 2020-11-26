import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Phone Number</p>
                <p>Message</p>
                <p>Role</p>
                <button onClick>Close</button>
            </div>
        );
    }
}

export default Popup;