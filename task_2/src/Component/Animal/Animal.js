import React from "react";
import './Animal.css';

const greetingText = () => {
    alert('Hello, I am an animal and nice to meet you');
};



function Animal (props) {
    return (
        <div className="animalCard">
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name}/>

            <button onClick={() => greetingText(props.name)}>Click Me</button>
        </div>
    )
}
//"https://source.unsplash.com/200x200/?lion"
//Hello, I am a Horse and glad to meet you!
// function Animal () {
//     return (
//         <div className="card">
//             <h1>Animal: Horse</h1>
//             <img src="https://source.unsplash.com/600x400/?nature,water" alt='pic'></img>

//             <button type="button">Hello, I am a Horse and glad to meet you!</button>
//         </div>
//     )
// }


export default Animal;