import { useRef } from 'react';
import { Icons, Sections, Urls } from 'helpers/constants';
import Layout from 'components/Layout';
import {
  ContactEmail,
  ContactEmailClip,
  ContactEmailText,
  ContactIconsList,
  ContactText,
  SuccessPopoverText,
} from './styled';
import { IconsListItem } from 'components/common/styled';
import Icon from 'assets/icons/Icon';
import { useClipboard } from 'helpers/hooks';

const Contact = () => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const { hasCopied, copyToClipboard } = useClipboard(emailRef);

  return (
    <Layout header={Sections.Contact}>
      <ContactText variant='P2'>
        Social media websites are an excellent way to connect and share experiences. I too have a handful of them, and I have
        listed them below. Wave &quot;Hi!&quot; to me and I will wave back. I would be more excited if we decide to talk
        about Web development, React ecosystem, JavaScript, Germany, Naruto and Elder Scrolls Online. If you prefer emails
        then send them to below address.
      </ContactText>
      <ContactEmail>
        <ContactEmailText variant='P2' ref={emailRef}>
          info@sunnyprakash.com
        </ContactEmailText>
        <ContactEmailClip role='button' title='Copy to clipboard' onClick={copyToClipboard}>
          <Icon name={hasCopied ? Icons.ClipboardChecked : Icons.Clipboard} />
        </ContactEmailClip>
        {hasCopied && <SuccessPopoverText>Copied</SuccessPopoverText>}
      </ContactEmail>
      <ContactIconsList>
        {[Icons.Linkedin, Icons.Twitter, Icons.Facebook, Icons['Expat Travel Finds']].map(icon => (
          <IconsListItem key={icon}>
            <Icon name={icon} url={Urls[icon as keyof typeof Urls]} />
          </IconsListItem>
        ))}
      </ContactIconsList>
    </Layout>
  );
};

export default Contact;
