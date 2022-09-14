import Image from 'next/image';
import React from 'react';
import { RouteLink } from '../Elements';
import styles from './index.module.scss';
import Brand from '@/public/logo_square.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__main}>
        <div className={styles.footer__brand}>
          <RouteLink href="/" classForContainer={styles.footer__image}>
            <Image src={Brand} alt="Brand" />
          </RouteLink>
          <p>
            Made with{' '}
            <span aria-label="Brain" role="img">
              🧠
            </span>{' '}
            and{' '}
            <span aria-label="Heart" role="img">
              💞
            </span>{' '}
            in Berlin.
          </p>
        </div>
        <div className={styles.footer__links}>
          <div>
            <h3>SERVICES</h3>
            <ul>
              <li>Career in Web Engineering</li>
              <li>Visa Sponsored Jobs</li>
              <li>Resume review</li>
              <li>Boost LinkedIn Profile</li>
              <li>Web & App Development</li>
            </ul>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <ul>
              <li>Blogs</li>
              <li>Videos</li>
              <li>Apps</li>
            </ul>
          </div>
          <div>
            <h3>COMPANY</h3>
            <ul>
              <li>About</li>
              <li>Goal</li>
              <li>Location</li>
            </ul>
          </div>
          <div>
            <h3>CONTACT</h3>
            <ul>
              <li>Email</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </section>
      <p className={styles.footer__copyright}>© {new Date().getFullYear()} All Rights Reserved, codesupr.com</p>
    </footer>
  );
};

export default Footer;
