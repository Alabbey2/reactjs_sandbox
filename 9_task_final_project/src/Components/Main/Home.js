import React from "react";
import Jumbotron from './Jumbotron';
import HeroCard from './HeroCard';

import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;  
`;


const Home = () => {
  return (
    <Section>
      <Jumbotron /> 
      <HeroCard />
      {/* <h2>This is our home page</h2>
      <h1>Welcome, welcome! </h1> */}
    </Section>
  );
};

export default Home;