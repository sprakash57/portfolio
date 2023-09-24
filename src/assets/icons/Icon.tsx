import { SVGAttributes } from 'react';
import {
  LinkedIn,
  Medium,
  Twitter,
  Github,
  Playstore,
  Stackoverflow,
  Arrow,
  Codewars,
  Facebook,
  Website,
  Clipboard,
  ClipboardChecked,
} from './index';
import { Icons } from 'helpers/constants';

interface Props extends SVGAttributes<SVGElement> {
  name: string;
  url?: string;
  size?: string;
  fill?: string;
  rotate?: number;
}

const Icon = ({ name, url, size, fill, rotate }: Props) => {
  const icon = {
    [Icons.Linkedin]: <LinkedIn />,
    [Icons.Medium]: <Medium />,
    [Icons.Twitter]: <Twitter />,
    [Icons.Github]: <Github />,
    [Icons.Codewars]: <Codewars />,
    [Icons.Playstore]: <Playstore />,
    [Icons.Stackoverflow]: <Stackoverflow />,
    [Icons.Arrow]: <Arrow size={size} fill={fill} rotate={rotate} />,
    [Icons.Facebook]: <Facebook />,
    [Icons['Expat Travel Finds']]: <Website />,
    [Icons.Clipboard]: <Clipboard />,
    [Icons.ClipboardChecked]: <ClipboardChecked />,
  };

  if (url) {
    return (
      <a href={url} rel='noreferrer noopener' target='_blank' title={name}>
        {icon[name as keyof typeof icon]}
      </a>
    );
  }

  return icon[name as keyof typeof icon];
};

export default Icon;
