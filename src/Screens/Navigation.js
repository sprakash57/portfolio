import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const handleLink = (event) => {
    const navLinks = event.target.parentNode.childNodes;
    let activeLink = event.target;
    navLinks.forEach(child => 
        child.innerHTML === activeLink.innerHTML ? activeLink.className = "active" : child.className = ""
        )
}

const Navigation = () => {
    return (
        <Navbar className="navigation" expand="lg" fixed="top">
            <Link to="/" style={{fontSize: 30}}>SU:PR</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto justify-content-end" onClick={handleLink}>
                    <Link to="/about">About</Link>
                    <Link to="/stats">Stats</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>    
                </Nav>  
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;