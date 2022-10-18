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
              <li>
                <RouteLink href="consult#job">Job Search</RouteLink>
              </li>
              <li>
                <RouteLink href="/videos#career">Career Consultation</RouteLink>
              </li>
              <li>
                <RouteLink href="/consult#career">Resume review</RouteLink>
              </li>
              <li>
                <RouteLink href="/consult#career">Boost LinkedIn Profile</RouteLink>
              </li>
              <li>
                <RouteLink href="/consult#engineering">Web Engineering</RouteLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <ul>
              <li>
                <RouteLink href="/blogs">Blogs</RouteLink>
              </li>
              <li>
                <RouteLink href="/videos#tutorials">Tutorials</RouteLink>
              </li>
              <li>
                <RouteLink href="/products">Products</RouteLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <RouteLink href="/about#intro">About</RouteLink>
              </li>
              <li>
                <RouteLink href="/about#goal">Goal</RouteLink>
              </li>
              <li>
                <RouteLink href="/about#location">Location</RouteLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>CONTACT</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>
                <RouteLink href="/contact">Email</RouteLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className={styles.footer__copyright}>© {new Date().getFullYear()} All Rights Reserved, codesupr.com</p>
    </footer>
  );
};

export default Footer;
