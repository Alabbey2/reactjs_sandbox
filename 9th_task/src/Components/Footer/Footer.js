import React from 'react'
import styled from 'styled-components';


const FooterStyle = styled.footer`
    padding: 2rem;
    background-color: #333;
    color: white;
    text-align: center;
    margin-top: 2rem;
`;

function Footer() {
    return (
        <FooterStyle>
          <p>&copy; copyright  - React Final Project. Abiodun Alabi BC Helsinki, 2020. </p> 
        </FooterStyle>
    )
}

export default Footer
