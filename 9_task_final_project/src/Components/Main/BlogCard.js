import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Card = styled.div`
    width: 250px;
    margin: 1rem;
    background: #eee;
    padding: 1rem;
    display: inline-block;
    min-height: 40vh;
`;

const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <em>{author}</em>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Link to={ link }>Read more</Link>
    </Card>
  );
};

export default BlogCard;