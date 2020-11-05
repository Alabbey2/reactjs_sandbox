import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Article from './Components/Article';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <Main />
        <Article />
      </div>
    );
  }
}

export default App;