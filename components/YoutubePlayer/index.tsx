import React from 'react';
import { classnames } from '@/helpers/utils';
import styled from './index.module.scss';

interface Props {
  videoId: string;
  width?: number;
  height?: number;
  title?: string;
  fullScreen?: boolean;
  features?: {
    accelerometer?: boolean;
    autoplay?: boolean;
    encryptedMedia?: boolean;
    gyroscope?: boolean;
    pictureInPicture?: boolean;
  };
  styleClass?: string;
}

const YoutubePlayer = ({
  width = 300,
  height = 180,
  videoId,
  title = 'SUPRDEV videos',
  fullScreen = true,
  features,
  styleClass = '',
}: Props) => {
  const featurePolicy =
    features === undefined
      ? 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      : Object.keys(features).reduce((memo, current) => {
          if (current in features && current) {
            memo += current;
          }
          return memo;
        }, '');

  return (
    <iframe
      className={classnames(styled.player, styleClass)}
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow={featurePolicy}
      allowFullScreen={fullScreen}
    />
  );
};

export default YoutubePlayer;
