import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

export const IsLoadingInfo = () => {
  return <CircularProgress isIndeterminate color='blue.300' size='120px' />;
};
