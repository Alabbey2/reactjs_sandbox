// import React, { Component } from 'react';
// import './Popup.css'

// class Popup extends Component {
//     render() {
//         return (
//             <div>
//                 <p>First Name</p>
//                 <p>Last Name</p>
//                 <p>Phone Number</p>
//                 <p>Message</p>
//                 <p>Role</p>
//                 <button onClick>Close</button>
//             </div>
//         );
//     }
// }

// export default Popup;

import React from "react";
import "./Popup.css";


const Popup = ({ firstname, lastname, phonenumber, message, role,submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name: <span>{firstname}</span>
          </p>
          <p>
            Last name: <span>{lastname}</span>
          </p>
          <p>
            Phonenumber: <span>{phonenumber}</span>
          </p>
          <p>
            Message: <span>{message}</span>
          </p>
          <p>
            Role: <span>{role}</span>
          </p>
          <button onClick={submit}>Yes, I am sure</button>

          </div>
      </div>
    </div>

          );
};

export default Popup;