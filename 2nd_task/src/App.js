import React from 'react';
import Animal from './Components/Animal';

const App = () => {
  return (
    
    <div className="component-cards">
      
      <Animal name="Dog" image="https://source.unsplash.com/weekly?/dog" />

      <Animal name="Lion" image="https://source.unsplash.com/weekly?/lion" />

      <Animal name="Cat" image="https://source.unsplash.com/weekly?/cat" />

      
    </div>
  );
};

export default App;