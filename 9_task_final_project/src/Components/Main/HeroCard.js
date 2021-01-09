import React from 'react'
import styled from 'styled-components';

const HeroImg = styled.div`
    width: 450px;
    height: 400px;
    background-image: url("https://source.unsplash.com/1600x900/?nature,water");
`;
const ImgWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`;

function HeroCard() {
    return (
        <ImgWrapper>
        <HeroImg>
            
        </HeroImg>
        <HeroImg>
            
        </HeroImg>
        <HeroImg>
            
        </HeroImg>
        <HeroImg>
            
        </HeroImg>
        </ImgWrapper>
    )
}

export default HeroCard
