import { Alerts } from '@/helpers/constants';
import React from 'react';
import { Box } from './styled';

interface Props {
  message: string;
  type: Alerts;
}

const NoData = ({ message, type }: Props) => {
  return (
    <Box borderColor={`var(--${type})`} bgColor={`var(--${type}10)`} role="alert">
      {message}
    </Box>
  );
};

export default NoData;
