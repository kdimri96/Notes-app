import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            
                <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand>Notes</Navbar.Brand>
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/create'>
                                <Nav.Link>Create</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/favorite'>
                                <Nav.Link>Favorite</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/notes'>
                                <Nav.Link>Notes</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Container>
                </Navbar>
            
                
            
        </div>
    )
}

export default Header;