import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import NewPost from "./NewPost";
// import Nothing from "./Nothing";

import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const MainWrapper = styled.div`
  
`;
const fixed = (data,num) => {
  const head = document.getElementById('headers');
  console.log(head);
  // head.classList.remove('fixed');
  if (num===1) {
    return <Blog />
  } else if (num===2) {
    return <NewPost />
  }
  // head.classList.add('fixed');
  return <Home />
}
const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route path="/" exact render={(data)=>fixed(data,0)} />
        <Route path="/blog" render={(data)=>fixed(data,1)} />
        <Route path="/new_post" render={(data)=>fixed(data,2)} />
      </Switch>
    </MainWrapper>
  );
};

export default Main;
