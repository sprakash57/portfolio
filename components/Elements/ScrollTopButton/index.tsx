import React from 'react';
import { useScrollToTop } from '@/helpers/hooks';
import s from './index.module.scss';

const ScrollTopButton = () => {
  const [showTop, goToTop] = useScrollToTop();
  if (!showTop) return null;

  return (
    <section className={s.topBtn} role="button" onClick={goToTop}>
      <span>&#8682;</span>
    </section>
  );
};

export default React.memo(ScrollTopButton);
