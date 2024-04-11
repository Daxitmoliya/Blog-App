import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <Navbar expand="lg" className="header">
            <Container fluid className='d-flex justify-content-between align-items-center '>
                <Navbar.Brand href="#home" className="header-brand">Blog-Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
                    <Nav className="ml-auto">
                        <NavLink exact to={'/'} className={'nav-link'} activeClassName="active ">
                            Create Data
                        </NavLink>
                        <NavLink to={'/viewData'} className={'nav-link'} activeClassName="active">
                            View Data
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
