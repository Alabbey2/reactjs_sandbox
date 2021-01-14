import React from 'react'
import styled from 'styled-components';

const HeroDiv = styled.div`
background-color: grey;
width: inherit;
height: 85vh;
color: white;
background-image: url("https://source.unsplash.com/1600x900/?people");
margin: 2rem 0;
`;

const HeroTitle = styled.h2`
text-align: center;
padding-top: 10rem;
font-size: 5rem;
`;

const HeroContent = styled.p`
text-align: center;
padding-top: 2rem;
font-size: 1.5rem;
`;


function Hero() {
    return (
    <HeroDiv>
      <HeroTitle>"Conscience is an opened wound, only the truth can heal it!"</HeroTitle>
      <HeroContent>Welcome to our platform where we say it just as it is! </HeroContent>
     
    
    </HeroDiv>
    )
}

export default Hero
