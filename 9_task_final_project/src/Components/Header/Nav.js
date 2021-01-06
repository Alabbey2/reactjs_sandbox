import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to ="/"> Home</Link>
                <Link to ="/blog">Blog</Link>
                <Link to ="/new_post">New Post</Link>
            </ul>
        </nav>
    );
};

export default Nav;