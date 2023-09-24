import React from 'react';
import { TextVariants } from 'theme/typography';
import styled from '@emotion/styled';

interface Props {
  variant: keyof typeof TextVariants;
  children: React.ReactNode;
  className?: string;
  htmlTag?: 'p';
}

const StyledText = styled.div<{ variant: keyof typeof TextVariants }>`
  font-weight: ${({ theme, variant }) => theme.text.variants[variant].fontWeight};
  letter-spacing: ${({ theme, variant }) => theme.text.variants[variant].letterSpacing};
  font-size: ${({ theme, variant }) => theme.text.variants[variant].fontSize};
  margin: 0.5rem 0;
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TextField = React.forwardRef(({ variant, children, className, htmlTag = 'p' }: Props, ref: React.LegacyRef<any>) => {
  return (
    <StyledText ref={ref} as={htmlTag} className={className} variant={variant}>
      {children}
    </StyledText>
  );
});

export default TextField;
