import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import styled from 'styled-components';

const Menu = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`;

const MenuLi = styled.li`
display: inline-block;
  padding: 1rem;
`;

const Nav = () => {
    return (
      <nav>
            <Menu className="menu">
                <MenuLi className="menuli">
                    <Button variant="contained" color="secondary">
                        <Link to="/" >Home</Link>
                    </Button>
                </MenuLi>
                <MenuLi className="menuli">
                    <Button variant="contained" color="secondary">
                        <Link to="/blog" >Blog</Link>
                    </Button>
                </MenuLi>
                <MenuLi className="menuli">
                    <Button variant="contained" color="secondary">
                        <Link to="/new_post" >New Post</Link>
                    </Button>
                </MenuLi>
                {/* <li>
                    <Button variant="contained" color="secondary">
                        <Link to="/nothing" >Nothing</Link>
                    </Button>
                </li> */}
                
                
            </Menu>
        </nav>
    );
};

export default Nav;