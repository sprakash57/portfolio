import { SocialShare } from '@/helpers/constants';
import { classnames } from '@/helpers/utils';
import React, { SVGAttributes } from 'react';
import styles from './index.module.scss';

interface Props {
  type: SocialShare;
  url: string;
  text: string;
  icon: (props: SVGAttributes<SVGElement>) => React.ReactNode;
  title?: string;
}

const SharingButton = ({ type, url, text, icon, title = '' }: Props) => {
  const encodedUrl = encodeURI(url);
  const fullUrl = React.useMemo(() => {
    switch (type) {
      case SocialShare.FACEBOOK:
        return `https://facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case SocialShare.LINKEDIN:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}&summary=${text}&source=${encodedUrl}`;
      case SocialShare.REDDIT:
        return `https://reddit.com/submit/?url=${encodedUrl}`;
      case SocialShare.TWITTER:
        return `https://twitter.com/intent/tweet/?text=${text}&url=${encodedUrl}`;
      case SocialShare.WHATSAPP:
        return `whatsapp://send?text=${text}%20${encodedUrl}`;
      default:
        return `mailto:?subject=${text}&body=${url}`;
    }
  }, [type, url]);

  return (
    <a
      className={classnames(styles.sharebtn, styles[`sharebtn--${type}`])}
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {icon({ className: styles.sharebtn__icon })}
    </a>
  );
};

export default SharingButton;
