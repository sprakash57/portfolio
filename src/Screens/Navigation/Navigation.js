import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import './Navigation.css';

class Navigation extends React.Component {

    state = {
        expanded: false
    }
    
    handleToggleClick = () => {
        window.innerWidth <= 768 && this.props.onToggleClick(!this.state.expanded);
    }

    handleLink = (event) => {
        const navLinks = event.target.parentNode.childNodes;
        const activeLink = event.target;
        navLinks.forEach(child => 
            child.innerHTML === activeLink.innerHTML ? activeLink.className = "active-nav-item" : child.className = ""
            )
        this.handleToggleClick();
        this.setState({expanded: false});
    }

    handleNavbarExpand = () => {
        this.handleToggleClick();
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        const {expanded} = this.state;
        return (
            <Navbar 
                className="navigation"
                expand="lg" fixed="top" 
                expanded={expanded} 
                onToggle={this.handleNavbarExpand}>
                <Link to="/" style={{fontSize: 30}} onClick={this.handleNavbarExpand}>SU:PR</Link>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav"
                    onClick={this.handleToggleClick} 
                    className={cx(expanded ? "rotate-burger" : "original-burger")}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto justify-content-end" onClick={this.handleLink}>
                        <Link to="/about">About</Link>
                        <Link to="/stats">Stats</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>    
                    </Nav>  
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;