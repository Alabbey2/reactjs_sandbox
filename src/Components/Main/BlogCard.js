import React from "react";
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import styled from 'styled-components';


const BlogCardDiv = styled.div`
width: 400px;
margin: 1rem;
background: #eee;
padding: 1rem;
display: inline-block;
box-shadow: 0 0 2px red;
border-radius: 5px;

`;

const BlogCardImg= styled.img`
width: 100%;
margin: 1rem 0;

`;


const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    <BlogCardDiv className="blogcard-wrapper">
      <h2>{title}</h2>
      <em>{author}</em>
      <p>{desc}</p>
      <BlogCardImg src={img} alt={title} />
      <Button variant="contained" color="secondary">
      <Link to={link}>Read more</Link>
      </Button>
    </BlogCardDiv>
  );
};

export default BlogCard;
