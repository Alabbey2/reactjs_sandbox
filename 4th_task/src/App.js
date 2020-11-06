import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css'
// import Article from './Components/Article';

class App extends Component {
  render() {
    return (
      <div className="header-part">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;