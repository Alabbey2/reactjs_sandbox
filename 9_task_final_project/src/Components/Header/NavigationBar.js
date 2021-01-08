import React from 'react';

import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';

const Styles = styled.div`
    .navbar {
        background-color: #64DB8F;
        width: 1200px;
        padding: 2rem;
        margin-bottom: 1rem;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #fff;
        &:hover {
        color: #fff;
        }
    }
`;


const NavigationBar = () => {
    return (

        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">WZB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/new_post">New Post</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
        
    );
};

export default NavigationBar;