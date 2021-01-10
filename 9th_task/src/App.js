import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from './Components/Footer/Footer';
import "./App.css";



import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
