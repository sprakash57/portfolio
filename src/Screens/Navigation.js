import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => (
    <Navbar className="navigation" expand="lg">
        <Navbar.Brand className="text-design" href="#home">Hire.me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav.Link className="text-design" href="#about">About</Nav.Link>
                <Nav.Link className="text-design" href="#skills">Skills</Nav.Link>
                <Nav.Link className="text-design" href="#stats">Stats</Nav.Link>
                <Nav.Link className="text-design" href="#work">Work</Nav.Link>
                <a className="text-design" href="#link">Contact</a>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;