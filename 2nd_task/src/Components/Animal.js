import React from 'react';
import './Animal.css';

const welcomeGreetings =(name) => {
    // console.log(name);
    alert('Hello, I am a beautiful dog. It is nice to meet you!');
};

const Animal = (props) => {
    return (
        <div className='animalCard'>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
            <button onClick={() => welcomeGreetings(props.name)}>Click me please & see what I have to say!</button>
        </div>
    );
};

export default Animal;