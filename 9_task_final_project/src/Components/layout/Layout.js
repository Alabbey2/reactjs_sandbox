import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const StyledContainer = styled.div`
    max-width: 1400px;
    
`;


function Layout(props) {
    return (
        <StyledContainer>
            <Container>
                {props.children}
                
            </Container>
        </StyledContainer>
    )
}

export default Layout
