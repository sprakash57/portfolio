import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <Navbar className="navigation" expand="lg" fixed="top">
        <Link className="text-design" to="/">Hire.me</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Link className="text-design" to="/about">About</Link>
            <Link className="text-design" to="/stats">Stats</Link>
            <Link className="text-design" to="/portfolio">Portfolio</Link>
            <Link className="text-design" to="/contact">Contact</Link>      
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;