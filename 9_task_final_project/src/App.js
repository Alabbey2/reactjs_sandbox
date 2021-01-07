import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import './App.css';


import {BrowserRouter as Router} from "react-router-dom";
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header/> 
      <Main/> 
      <Footer />
    </Router>
  );
};

export default App;