import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const IsErrorInfo = () => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>ERROR!</AlertTitle>
      <AlertDescription>refresh the page: alt+F4</AlertDescription>
    </Alert>
  );
};
