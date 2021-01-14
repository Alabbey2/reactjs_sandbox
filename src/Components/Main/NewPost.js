import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const Form = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
    
`;

const FormTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    font-size: 2.2rem;
`;

const FormGroup = styled.div`
    margin: 1rem;
`;

const Label = styled.label`
width: 200px;
display: inline-block; 
`;

const Input = styled.input`
  width: 200px;
  border: 1px solid rgb(99, 99, 99);
  padding: 0.5rem;
  font-size: 0.8rem; 
`;
const Textarea = styled.textarea`
  width: 200px;
  border: 1px solid rgb(99, 99, 99);
  padding: 0.5rem;
  font-size: 0.8rem; 
`;
const Button = styled.button`
width: 200px;
border: none;
background-color: #64DB8F;
padding: 1rem;
text-transform: uppercase;
color: white; 
`;


const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();
    const {title, author, desc} = newPost;
    
    if (title !== "" && author !== "" && desc !=="") {
      axios.post("http://localhost:3001/posts", newPost).then((response) => {
      
      const {data} = response, {id} = data;

      if (id && id > 0) {
        alert("success");
      }
    });
    }
    else {
      alert("incomplete or missing data");
    }
    
  };

  return (
    <>
      <div>
      <FormTitle>Add new post</FormTitle>
      <Form>
      <form className="newPost" onSubmit={addPostHandler}>
        <FormGroup>
          <Label>
          <label htmlFor="title">Title</label></Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </FormGroup>
        <FormGroup>
        <Label>
          <label htmlFor="author">Author</label></Label>
          <Input
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
          />
        </FormGroup>
        <FormGroup>
        <Label>
          <label htmlFor="desc">Description</label></Label>
          <Textarea
          
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
          
        </FormGroup>
        <FormGroup>
        <Label>
          <label htmlFor="img">Image URL</label></Label>
          <Input
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
        </FormGroup>
        <Button type="submit">Add new post </Button>
      </form>
      </Form>
      </div>
    </>
  );
};

export default NewPost;