import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <Navbar className="navigation" expand="lg">
        <Navbar.Brand className="text-design" href="#home"><Link to="/">Hire.me</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link className="text-design"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link className="text-design"><Link to="/stats">Stats</Link></Nav.Link>
            <Nav.Link className="text-design"><Link to="/portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link className="text-design"><Link to="/contact">Contact</Link></Nav.Link>       
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;