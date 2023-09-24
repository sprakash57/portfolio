import styled from '@emotion/styled';
import theme from 'theme/index';

interface Props {
  videoId: string;
  title: string;
  height?: number;
}

const Player = styled.iframe`
  border-radius: 0.875rem;
  width: 100%;
  border: none;
  margin: 1rem 0;
  border-radius: 0.875rem;
  box-shadow:
    2px 2px 20px 0px ${theme.colors.black50},
    -2px -2px 20px 0px ${theme.colors.black50};
`;

const VideoPlayer = ({ videoId, height = 300, title }: Props) => {
  return (
    <Player
      src={`https://www.youtube.com/embed/${videoId}`}
      height={height}
      title={title}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    />
  );
};

export default VideoPlayer;
