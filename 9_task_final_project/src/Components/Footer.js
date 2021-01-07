import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #333;
    height: 50px;
    width: 1200px;
    color: #fff;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter>
            &copy; React Final Project 2020.
        </StyledFooter>
    )
}

export default Footer
