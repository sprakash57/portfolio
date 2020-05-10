import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className={styles.title} to='/'>S<span className={styles.tomato}>:_:</span>PR</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' activeClassName='active' to='/blog'>Blog</Link>
          </li>
          <li className="nav-item ml-2">
            <Link className='nav-link' activeClassName='active' to='/about'>About</Link>
          </li>
          <li className="nav-item ml-2">
            <Link className='nav-link' activeClassName='active' to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
