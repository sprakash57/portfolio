import { Icon, RouteLink } from '@/components/Elements';
import { Icons, SocialLinks } from '@/helpers/constants';
import React from 'react';
import s from './index.module.scss';

const Contact = () => {
  return (
    <section className={s.contact}>
      <div className={s.contact__row}>
        <h1>CONTACT US</h1>
        <p>
          We are happy to help you. And the best part to get the help is that you do not need to fill boring forms. Just
          send your query, feedback or any suggestion at below email address. We will try to reach out to you as soon as
          we can.
        </p>
        <span>info@codesupr.com</span>
      </div>
      <div className={s.contact__row}>
        <h1>REACH OUT TO US</h1>
        <p>
          {`Let's connect on any of the platroms below. If you are active at the social media platforms, we are there too.`}
        </p>
        <figure>
          <RouteLink href={SocialLinks.YOUTUBE} title="Youtube" isExternal>
            <Icon name={Icons.YOUTUBE} width="32" height="32" />
          </RouteLink>
          <RouteLink href={SocialLinks.LINKEDIN} isExternal title="LinkedIn">
            <Icon name={Icons.LINKEDIN} withBg color="var(--frenchBlue)" width="30" height="30" />
          </RouteLink>
          <RouteLink href={SocialLinks.FACEBOOK} isExternal title="Facebook">
            <Icon name={Icons.FACEBOOK} withBg color="var(--denim)" width="30" height="30" />
          </RouteLink>
          <RouteLink href={SocialLinks.TWITTER} isExternal title="Twitter">
            <Icon name={Icons.TWITTER} color="var(--pictonBlue)" width="32" height="32" />
          </RouteLink>
          <RouteLink href={SocialLinks.INSTAGRAM} isExternal title="Instagram">
            <Icon name={Icons.INSTAGRAM} width="35" height="35" />
          </RouteLink>
        </figure>
      </div>
    </section>
  );
};

export default Contact;
