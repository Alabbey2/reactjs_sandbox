import React from "react";
import Jumbotron from './Jumbotron';
import HeroCard from './HeroCard';

const Home = () => {
  return (
    <div>
      <Jumbotron /> 
      <HeroCard />
      {/* <h2>This is our home page</h2>
      <h1>Welcome, welcome! </h1> */}
    </div>
  );
};

export default Home;