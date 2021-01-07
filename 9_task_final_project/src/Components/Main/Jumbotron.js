import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div `
   
`;

function Jumbotron() {
    return (
        
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1>Conscience is an open wound, only the truth can heal it</h1>
                    </Container>
                </Jumbo>
            </Styles>
        
    )
}

export default Jumbotron
