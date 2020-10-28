import React from "react";
import './Animal.css';


function Animal () {
    return (
        <div className="card">
            <h1>Animal: Horse</h1>
            <img src="https://source.unsplash.com/600x400/?nature,water" alt='pic'></img>

            <button type="button">Hello, I am a Horse and glad to meet you!</button>
        </div>
    )
}


export default Animal;