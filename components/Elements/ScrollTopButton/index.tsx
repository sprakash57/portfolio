import React from 'react';
import { useScrollToTop } from '@/helpers/hooks';
import { BtnContainer } from './styled';

const ScrollTopButton = () => {
  const [showTop, goToTop] = useScrollToTop();
  if (!showTop) return null;

  return (
    <BtnContainer onClick={goToTop} role="button">
      <span>&#8682;</span>
      <span>Top</span>
    </BtnContainer>
  );
};

export default ScrollTopButton;
