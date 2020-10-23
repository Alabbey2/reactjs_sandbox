import React from 'react';
import './App.css';

const greeting = "I made it"
const personalGreeting = "I made it again"


function Box (props) {
  return (
    <div className="box">
        {personalGreeting}
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        <p>{props.age}</p>
        <p>{props.phone}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
    <h1>{greeting} </h1>
    <Box name="Tani" title="CEO" age="19" phone="122346" />
    <Box name="Mary" title="Staff" age="29" phone="122346" />
    <Box name="Paul" title="Wrestler" age="18" phone="122346" />
    <Box name="Lola" title="Swimmer" age="39" phone="122346" />
    <Box name="Eni" title="Scientist" age="25" phone="122346" />
    
       
    </div>
  );
}

export default App;
