import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Button><li><Link to ="/"> Home</Link></li>
                </Button>
                <Button><li><Link to ="/blog">Blog</Link></li></Button>
                <Button><li><Link to ="/new_post">New Post</Link></li></Button>
            </ul>
        </nav>
    );
};

export default Nav;