import React from "react";
// import Hero from './Hero';
import HeroCarousel from './HeroCarousel';




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
      <div>
    <HeroCarousel />
    </div>
    <div className="btn-wrapper">
    
    <Section>Inciteful</Section>
    <Section>Simple Language</Section>
    <Section>Analytical</Section>
    <Section>Educative</Section>
    
    </div>
    </div>
  );
};

export default Home;
