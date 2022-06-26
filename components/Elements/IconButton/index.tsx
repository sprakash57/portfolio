import React from 'react';
import { SocialShare } from '@/helpers/constants';
import { classnames, encodeURI } from '@/helpers/utils';
import Icon from '../Icons/Icon';
import styles from './index.module.scss';

interface Props {
  type: SocialShare;
  url: string;
  icon: string;
  text?: string;
  title?: string;
  iconStyle?: string;
  iconContainerStyle?: string;
  label?: string;
  labelStyle?: string;
}

const IconButton = ({
  type,
  url,
  text = '',
  icon,
  title = '',
  iconStyle = '',
  iconContainerStyle = '',
  label = '',
  labelStyle = '',
}: Props) => {
  const encodedUrl = encodeURI(`${process.env.DOMAIN_URL}/${url}`);
  const fullUrl = React.useMemo(() => {
    switch (type) {
      case SocialShare.FACEBOOK:
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case SocialShare.LINKEDIN:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}&summary=${text}&source=${encodedUrl}`;
      case SocialShare.REDDIT:
        return `https://reddit.com/submit/?url=${encodedUrl}&title=${encodeURI(text)}`;
      case SocialShare.TWITTER:
        const message = `I read this blog 👉 ${text}. Give it a try`;
        return `https://twitter.com/intent/tweet/?text=${message}&url=${encodedUrl}&via=sunny_pr_`;
      case SocialShare.WHATSAPP:
        return `whatsapp://send?text=${text}%20${encodedUrl}`;
      case SocialShare.GITHUB:
        return `https://github.com/sprakash57/portfolio/edit/master/data/posts/${url}.mdx`;
      case SocialShare.TWITTER_DISCUSS:
        return `https://mobile.twitter.com/search?q=${encodedUrl}`;
      case SocialShare.EMAIL:
        return `mailto:?subject=${text}&body=${url}`;
      default:
        return url;
    }
  }, [type, url]);

  return (
    //@ts-ignore
    <a
      className={classnames(styles.sharebtn, iconContainerStyle, styles[`sharebtn--${type}`])}
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
    >
      <Icon name={icon} styles={classnames(styles.sharebtn__icon, iconStyle)} />
      {label && <span className={classnames(styles.sharebtn__label, labelStyle)}>{label}</span>}
    </a>
  );
};

export default IconButton;
