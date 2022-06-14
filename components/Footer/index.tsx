import React from 'react';
import { FOOTER_INTRO } from '@/data/about';

const Footer = () => {
  const clickToCopy = async (e: React.SyntheticEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLParagraphElement;
    await navigator.clipboard.writeText(String(target.textContent));
  };
  return (
    <footer className="footerContainer">
      <p className="contact" dangerouslySetInnerHTML={{ __html: FOOTER_INTRO }} role="button" onClick={clickToCopy} />
    </footer>
  );
};

export default Footer;
