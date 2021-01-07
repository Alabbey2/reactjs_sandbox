import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';
import Layout from './Components/layout/Layout';
import styled from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './Components/Footer';


const Section = styled.div`
  height: 100vh;
  width: 1200px;
   
`;

const App = () => {
  return (
    
      <Layout>
        <Router>
          <Header/>
          <Section>
            <Main/> 
          </Section>
          <Footer />
        </Router>
      </Layout>
    
  );
};

export default App;