import s from './index.module.css';
import { Arrow } from 'src/assets/icons';

const ScrollToView = ({ elementId }: { elementId: string }) => {
 const handleClick = () => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
 };

 return (
  <div className={s.container} role="button" onClick={handleClick} title="Next section">
   <Arrow className={s.arrow} fill="#e86b4d" size="36" />
  </div>
 );
};

export default ScrollToView;
