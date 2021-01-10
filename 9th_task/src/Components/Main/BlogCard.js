import React from "react";
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import styled from 'styled-components';


const BlogCardDiv = styled.div`
width: 360px;
margin: 1rem;
background: #eee;
padding: 1rem;
display: inline-block;
`;
const BlogCardImg= styled.img`
width: 100%
`;


const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    <BlogCardDiv>
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
