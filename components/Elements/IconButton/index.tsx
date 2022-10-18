import React from 'react';
import { Icons } from '@/helpers/constants';
import { classnames, encodeURI } from '@/helpers/utils';
import { Icon } from '@/components/Elements';
import styles from './index.module.scss';

interface Props {
  type: Icons;
  icon: string;
  url?: string;
  text?: string;
  title?: string;
  iconStyle?: string;
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconContainerStyle?: string;
  label?: string;
  labelStyle?: string;
}

const IconButton = ({
  type,
  url = '',
  text = '',
  icon,
  title = '',
  iconStyle = '',
  iconContainerStyle = '',
  iconWidth = '',
  iconHeight = '',
  iconColor = 'var(--sepia)',
  label = '',
  labelStyle = '',
}: Props) => {
  const encodedUrl = encodeURI(`${process.env.BLOGS_URL}/${url}`);
  const fullUrl = React.useMemo(() => {
    switch (type) {
      case Icons.FACEBOOK:
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case Icons.LINKEDIN:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}&summary=${text}&source=${encodedUrl}`;
      case Icons.REDDIT:
        return `https://reddit.com/submit/?url=${encodedUrl}&title=${encodeURI(text)}`;
      case Icons.TWITTER:
        const message = `I read this blog 👉 ${text}. Give it a try`;
        return `https://twitter.com/intent/tweet/?text=${message}&url=${encodedUrl}&via=sunny_pr_`;
      case Icons.WHATSAPP:
        return `whatsapp://send?text=${text}%20${encodedUrl}`;
      case Icons.GITHUB:
        return `https://github.com/sprakash57/portfolio/edit/master/data/posts/${url}.mdx`;
      case Icons.TWITTER_DISCUSS:
        return `https://mobile.twitter.com/search?q=${encodedUrl}`;
      case Icons.EMAIL:
        return `mailto:?subject=${text}&body=${url}`;
      default:
        return url;
    }
  }, [type, url, encodedUrl, text]);

  return (
    //@ts-ignore
    <a
      className={classnames(styles.sharebtn, styles[`sharebtn--${type}`], iconContainerStyle)}
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
    >
      <Icon
        name={icon.toLowerCase()}
        color={iconColor}
        height={iconHeight}
        width={iconWidth}
        styles={classnames(styles.sharebtn__icon, iconStyle)}
      />
      {label && <span className={classnames(styles.sharebtn__label, labelStyle)}>{label}</span>}
    </a>
  );
};

export default IconButton;
