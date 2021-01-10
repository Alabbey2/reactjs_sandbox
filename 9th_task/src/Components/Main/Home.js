import React from "react";
import Hero from './Hero';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const Section = styled.p`
  padding: 1rem;
  color: #333;
  width: 565px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  
`;

const Home = () => {
  return (
    <div>
    <Hero />
    <Button variant="outlined" color="secondary">
    <Section>
      Inciteful
        
    </Section>
    </Button>

    <Button variant="outlined" color="secondary">
    <Section>
      Simple Language

    </Section>
    </Button>

    <Button variant="outlined" color="secondary">
    <Section>
      Analytic

    </Section>
    </Button>
    <Button variant="outlined" color="secondary">
    <Section>
      Educative
    </Section>
    </Button>
    
    </div>
  );
};

export default Home;
