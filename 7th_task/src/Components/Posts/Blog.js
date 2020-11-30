import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/posts';

const Blog = () => {
    const [title, setTitle] = useState('Hello World');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(API).then(response => setPosts(response.data));
    }, []);

    const changeTitleHandler = () => {
        let newTitle = prompt('what should be the next title?');
        setTitle(newTitle);
    };

    return (
        <div>
            <h1 onClick={changeTitleHandler}>{title}</h1>
            <div className="posts">
                {posts.map(p => <div key={p.id}> 
                <img src={p.img} alt="pic"/>
                <h2>{p.title}</h2>
                <p>{p.id}</p>
                <p>p.author</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default Blog;