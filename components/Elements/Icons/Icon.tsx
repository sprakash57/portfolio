import React from 'react';
import { Buymecoffee, GitHub, LinkedIn, Email, Facebook, Twitter, Paypal, Sponsor, Check } from './index';

const Icon = ({ name, styles = '' }: { name: string; styles?: string }) => {
  switch (name) {
    case 'Facebook':
      return <Facebook className={styles} />;
    case 'LinkedIn':
      return <LinkedIn className={styles} />;
    case 'Twitter':
      return <Twitter className={styles} />;
    case 'GitHub':
      return <GitHub className={styles} />;
    case 'Buy me Coffee':
      return <Buymecoffee className={styles} />;
    case 'Paypal':
      return <Paypal className={styles} />;
    case 'Sponsor':
      return <Sponsor className={styles} />;
    case 'Check':
      return <Check className={styles} />;
    default:
      return <Email className={styles} />;
  }
};

export default Icon;
