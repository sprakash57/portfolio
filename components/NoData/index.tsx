import { Alerts } from '@/helpers/constants';
import React from 'react';
import { Box } from './styled';

interface Props {
  message: string;
  color: Alerts;
}

const NoData = ({ message, color }: Props) => {
  return (
    <Box borderColor={`var(--${color})`} bgColor={`var(--${color}10)`}>
      {message}
    </Box>
  );
};

export default NoData;
