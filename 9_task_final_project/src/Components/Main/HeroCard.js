import React from 'react'
import styled from 'styled-components';

const HeroImgFirst = styled.div`
    width: 450px;
    height: 400px;
    background-image: url("https://source.unsplash.com/1600x900/?river");
    color: #fff;
`;
const HeroImgSecond = styled.div`
    width: 450px;
    height: 400px;
    background-image: url("https://source.unsplash.com/1600x900/?yellow");
    color: #fff;
`;
const HeroImgThird = styled.div`
    width: 450px;
    height: 400px;
    background-image: url("https://source.unsplash.com/1600x900/?color");
    color: #fff;
`;
const HeroImgFourth = styled.div`
    width: 450px;
    height: 400px;
    background-image: url("https://source.unsplash.com/1600x900/?forest");
    color: #fff;
`;
const ImgWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
`;

function HeroCard() {
    return (
        <ImgWrapper>
            
        <HeroImgFirst>
        <p>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>  
        </HeroImgFirst>
        <HeroImgSecond>
        <p>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>  
        </HeroImgSecond>
        <HeroImgThird>
        <p>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p> 
        </HeroImgThird>
        <HeroImgFourth>
        <p>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>  
        </HeroImgFourth>
        </ImgWrapper>
    )
}

export default HeroCard
