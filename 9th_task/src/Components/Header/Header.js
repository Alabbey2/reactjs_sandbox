import React from "react";
import Nav from "./Nav";


function Brand (props) {
  
  return (
  <h2>{props.name}</h2>
  )
}
const Header = () => {
  return (
    <header>
      <Brand name="Wazoobia"/>
      <Nav />
    </header>
  );
};

export default Header;
