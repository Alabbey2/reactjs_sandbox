import React from "react";
import Hero from './Hero';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button'

// const Section = styled.p`
//   padding: 1rem;
//   color: #333;
//   width: 500px;
//   height: 300px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 3rem;
  
// `;


const Section = ({children}) => {
  return (
    <section className="btn">
      {children}
    </section>
  )
}





const Home = () => {
  return (
    <div>
    <Hero />
    <div className="btn-wrapper">
    
    <Section>Inciteful</Section>
    <Section>Simple Language</Section>
    <Section>Analytic</Section>
    <Section>Educative</Section>
    
    </div>
    </div>
  );
};

export default Home;
