import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const Card = styled.div`
    width: 350px;
    margin: 1rem;
    background: #eee;
    padding: 1rem;
    display: inline-block;
    min-height: 60vh;
    box-shadow: 0 0 5px #333;
`;

const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <em>{author}</em>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Button variant="dark">
      <Link to={ link }>Read more</Link>
      </Button>
    </Card>
  );
};

export default BlogCard;