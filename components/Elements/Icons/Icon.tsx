import { Icons } from '@/helpers/constants';
import React from 'react';
import {
  Buymecoffee,
  GitHub,
  LinkedIn,
  Email,
  Facebook,
  Twitter,
  Paypal,
  Sponsor,
  Check,
  Read,
  Explore,
  Watch,
  Youtube,
  Fork,
  Star,
  ExtLink,
  Android,
  Chrome,
  Windows,
  Npm,
  OpenSource,
  Blog,
  Project,
  Caret,
  Whatsapp,
  Reddit,
} from './index';

const Icon = ({ name, styles = '', width = '20', height = '20', color = 'white' }: IconProps) => {
  switch (name) {
    case Icons.FACEBOOK:
      return <Facebook className={styles} width={width} height={height} fill={color} />;
    case Icons.LINKEDIN:
      return <LinkedIn className={styles} width={width} height={height} fill={color} />;
    case Icons.TWITTER_DISCUSS:
    case Icons.TWITTER:
      return <Twitter className={styles} width={width} height={height} fill={color} />;
    case Icons.GITHUB:
      return <GitHub className={styles} width={width} height={height} fill={color} />;
    case Icons.BUYMECOFFEE:
      return <Buymecoffee className={styles} width={width} height={height} fill={color} />;
    case Icons.PAYPAL:
      return <Paypal className={styles} width={width} height={height} fill={color} />;
    case Icons.SPONSOR:
      return <Sponsor className={styles} width={width} height={height} fill={color} />;
    case Icons.CHECK:
      return <Check className={styles} width={width} height={height} fill={color} />;
    case Icons.READ:
      return <Read className={styles} width={width} height={height} fill={color} />;
    case Icons.EXPLORE:
      return <Explore className={styles} width={width} height={height} fill={color} />;
    case Icons.WATCH:
      return <Watch className={styles} width={width} height={height} fill={color} />;
    case Icons.YOUTUBE:
      return <Youtube className={styles} width={width} height={height} fill={color} />;
    case Icons.FORK:
      return <Fork className={styles} width={width} height={height} fill={color} />;
    case Icons.STAR:
      return <Star className={styles} width={width} height={height} fill={color} />;
    case Icons.EXTLINK:
      return <ExtLink className={styles} width={width} height={height} fill={color} />;
    case Icons.ANDROID:
      return <Android className={styles} width={width} height={height} fill={color} />;
    case Icons.NPM:
      return <Npm className={styles} width={width} height={height} fill={color} />;
    case Icons.CHROME:
      return <Chrome className={styles} width={width} height={height} fill={color} />;
    case Icons.WINDOWS:
      return <Windows className={styles} width={width} height={height} fill={color} />;
    case Icons.WHATSAPP:
      return <Whatsapp className={styles} width={width} height={height} fill={color} />;
    case Icons.OPEN_SOURCE:
      return <OpenSource className={styles} width={width} height={height} fill={color} />;
    case Icons.PROJECT:
      return <Project className={styles} width={width} height={height} fill={color} />;
    case Icons.BLOG:
      return <Blog className={styles} width={width} height={height} fill={color} />;
    case Icons.CARET:
      return <Caret className={styles} width={width} height={height} fill={color} />;
    case Icons.REDDIT:
      return <Reddit className={styles} width={width} height={height} fill={color} />;
    default:
      return <Email className={styles} width={width} height={height} fill={color} />;
  }
};

export default Icon;
