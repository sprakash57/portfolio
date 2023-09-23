import s from './index.module.css';

interface Props {
  videoId: string;
  title: string;
  height?: number;
}

const VideoPlayer = ({ videoId, height = 300, title }: Props) => {
  return (
    <iframe
      className={s.player}
      src={`https://www.youtube.com/embed/${videoId}`}
      height={height}
      title={title}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    />
  );
};

export default VideoPlayer;
