import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'

const Nav = () => {
    return (
      <nav>
            <ul>
                <li>
                    <Button variant="contained" color="secondary">
                        <Link to="/" >Home</Link>
                    </Button>
                </li>
                <li>
                    <Button variant="contained" color="secondary">
                        <Link to="/blog" >Blog</Link>
                    </Button>
                </li>
                <li>
                    <Button variant="contained" color="secondary">
                        <Link to="/new_post" >New Post</Link>
                    </Button>
                </li>
                {/* <li>
                    <Button variant="contained" color="secondary">
                        <Link to="/nothing" >Nothing</Link>
                    </Button>
                </li> */}
                
                
            </ul>
        </nav>
    );
};

export default Nav;