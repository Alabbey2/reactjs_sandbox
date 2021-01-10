import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import NewPost from "./NewPost";
// import Nothing from "./Nothing";

import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/new_post" component={NewPost} />
      </Switch>
    </MainWrapper>
  );
};

export default Main;
