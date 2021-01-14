import React from "react";
import Nav from "./Nav";
import BrandName from './BrandName';
import styled from 'styled-components';

const Heading = styled.header`
background-color: #64DB8F;
color: white;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Header = () => {
  
  return (
    <Heading className="header" id="headers">
      <BrandName/>
      <Nav />
    </Heading>
  );
};

export default Header;
