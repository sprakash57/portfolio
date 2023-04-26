import s from './index.module.css';
import Extraf from '../../assets/Extraf.png';
import Discogspedia from '../../assets/discogspedia.png';
import Mealander from '../../assets/mealander.png';
import Crs from '../../assets/crs.png';
import { Sections, Urls } from 'src/constants';
import ScrollToView from '../common/ScrollToView';
import { SectionHeader } from '../common/Styled';
import Github from 'src/assets/icons/Github';
import Stackoverflow from 'src/assets/icons/Stackoverflow';
import { Playstore } from 'src/assets/icons';
import Codewars from 'src/assets/icons/Codewars';

const Explore = () => {
 return (
  <section id={Sections.Explore}>
   <SectionHeader>Explore</SectionHeader>
   <ul className={s.list}>
    <li className={s.listItem}>
     <a className={s.listItemLink} href="https://expattravelfinds.com" target="_blank" rel="noopener noreferrer">
      <img className={s.listItemImg} src={Extraf} alt="Expat Travel Finds" />
      <p>Expat Travel Finds</p>
     </a>
    </li>
    <li className={s.listItem}>
     <a
      className={s.listItemLink}
      href="https://sprakash57.github.io/create-react-saga"
      target="_blank"
      rel="noopener noreferrer"
     >
      <img className={`${s.listItemImg} ${s.crs}`} src={Crs} alt="Create React Saga" />
      <p>Create React Saga</p>
     </a>
    </li>
    <li className={s.listItem}>
     <a className={s.listItemLink} href="https://codesupr.com" target="_blank" rel="noopener noreferrer">
      <img className={s.listItemImg} src={Discogspedia} alt="Discogspedia" />
      <p>Discogspedia</p>
     </a>
    </li>
    <li className={s.listItem}>
     <a
      className={s.listItemLink}
      href="https://play.google.com/store/apps/details?id=com.insu.sunny.addeatrepeat"
      target="_blank"
      rel="noopener noreferrer"
     >
      <img className={s.listItemImg} src={Mealander} alt="Mealander" />
      <p>Mealander</p>
     </a>
    </li>
   </ul>
   <p className={s.moreWork}>Find out more</p>
   <ul className={s.socialList}>
    <li className={s.socialListItem}>
     <a href={Urls.Github} rel="noreferrer noopener" target="_blank" title="Github">
      <Github />
     </a>
    </li>
    <li className={s.socialListItem}>
     <a href={Urls.Stackoverflow} rel="noreferrer noopener" target="_blank" title="Stackoverflow">
      <Stackoverflow />
     </a>
    </li>
    <li className={s.socialListItem}>
     <a href={Urls.Playstore} rel="noreferrer noopener" target="_blank" title="Playstore">
      <Playstore />
     </a>
    </li>
    <li className={s.socialListItem}>
     <a href={Urls.Codewars} rel="noreferrer noopener" target="_blank" title="Codewars">
      <Codewars />
     </a>
    </li>
   </ul>
   <div className="scrollBtn">
    <ScrollToView elementId={Sections.Watch} />
   </div>
  </section>
 );
};

export default Explore;
