import { useEffect, useRef, useState } from 'react';
import { Sections, Urls } from 'helpers/constants';
import { Clipboard, Facebook, LinkedIn, Mastodon, Twitter, Youtube, Website, ClipboardChecked } from 'assets/icons';
import Layout from 'components/common/Layout';
import s from './index.module.css';

const Contact = () => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailRef.current ? emailRef.current.innerText : '');
    setHasCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setHasCopied(false), 700);
    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return (
    <Layout header={Sections.Contact}>
      <p className={s.contactPara}>
        Social media sites are excellent for chatting and connecting. I also have a handful of them, which I have listed
        here. These are great way to say &quot;Hi!&quot; and discuss about career opportunities, web development, Mobile
        apps development, or maybe general discussion. I would be more excited if our discussion includes React ecosystem,
        Germany, Naruto and Elder Scrolls Online. If you are someone who prefer emails then send your queries, feedback or
        suggestions to below address.
      </p>
      <div className={s.contactEmail}>
        <span className={s.contactEmailText} ref={emailRef}>
          info@sunnyprakash.com
        </span>
        <span className={s.contactEmailClipIcon} role="button" title="Copy to clipboard" onClick={copyToClipboard}>
          {hasCopied ? <ClipboardChecked /> : <Clipboard />}
        </span>
        {hasCopied && <span className={s.copySuccess}>Copied</span>}
      </div>
      <ul className={s.socialList}>
        <li className={s.socialListItem}>
          <a href={Urls.Linkedin} rel="noreferrer noopener" target="_blank" title="LinkedIn">
            <LinkedIn />
          </a>
        </li>
        <li className={s.socialListItem}>
          <a href={Urls.Youtube} rel="noreferrer noopener" target="_blank" title="Youtube">
            <Youtube />
          </a>
        </li>
        <li className={s.socialListItem}>
          <a href={Urls.Twitter} rel="noreferrer noopener" target="_blank" title="Twitter">
            <Twitter />
          </a>
        </li>
        <li className={s.socialListItem}>
          <a href={Urls.Mastodon} rel="noreferrer noopener" target="_blank" title="Mastodon">
            <Mastodon />
          </a>
        </li>
        <li className={s.socialListItem}>
          <a href={Urls.Facebook} rel="noreferrer noopener" target="_blank" title="Facebook">
            <Facebook />
          </a>
        </li>
        <li className={s.socialListItem}>
          <a href={Urls.Website} rel="noreferrer noopener" target="_blank" title="Expat Travel Finds">
            <Website />
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Contact;
