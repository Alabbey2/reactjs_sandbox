import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const SinglePost = () => {
  const [post, setPost] = useState();
  let { id } = useParams(), postData = undefined;
  

  useEffect(()=> {
      if (!post) {
          axios.get("http://localhost:3001/posts/" + id).then((res) => setPost(res.data));
      }
  });

  

  if (id) {
      postData = <h1>Loading.....</h1>
  }
  if (post) {
      postData = (
          <div>
              {post.title} {post.author} {post.desc}
          </div>
      )
  }
  else {
      postData = <div>{`Blog with the id of ${id} is not found!`} </div>;
  }
  return postData;
  
};

export default SinglePost;
