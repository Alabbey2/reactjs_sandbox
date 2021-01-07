import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import './App.css';
import Layout from './Components/layout/Layout';


import {BrowserRouter as Router} from "react-router-dom";
import Footer from './Components/Footer';

const App = () => {
  return (
    <Layout>
      <Router>
        <Header/> 
        <Main/> 
        <Footer />
      </Router>
    </Layout>
  );
};

export default App;