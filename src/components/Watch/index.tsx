import s from './index.module.css';
import VideoPlayer from '../common/VideoPlayer';
import { Sections, Urls } from 'src/constants';
import ScrollToView from '../common/ScrollToView';
import { SectionHeader } from '../common/Styled';

const data = [
 {
  id: '1',
  title: 'German work visa',
  videoId: 'DSUbPGfAEgg',
 },
 {
  id: '2',
  title: 'Magdeburg',
  videoId: 'Rhk7iRReX1E',
 },
 {
  id: '3',
  title: 'Best Resume for visa sponsored jobs',
  videoId: 'VmpA81mrY7E',
 },
];

const Watch = () => {
 return (
  <section id={Sections.Watch}>
   <SectionHeader>Watch</SectionHeader>
   <article className={s.Watch}>
    {data.map(({ id, title, videoId }) => (
     <VideoPlayer key={id} videoId={videoId} title={title} />
    ))}
   </article>
   <div className={s.moreVideos}>
    <a href={Urls.Medium} target="_blank" rel="noopener noreferrer">
     More Videos
    </a>{' '}
    <span>|</span>{' '}
    <a href={Urls.SubscribeYoutube} target="_blank" rel="noopener noreferrer">
     Subscribe me
    </a>
   </div>
   <div className="scrollBtn">
    <ScrollToView elementId={Sections.Contact} />
   </div>
  </section>
 );
};

export default Watch;
