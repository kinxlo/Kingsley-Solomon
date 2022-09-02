import { Box } from '@chakra-ui/react';
import React from 'react';

const hero = ({ children }) => {
  return (
    <Box
      position={`fixed`}
      top={0}
      right={0}
      height={`100vh`}
      width={`50%`}
      bg={`accent`}
      zIndex={-999}
    >
      {children}
    </Box>
  );
};

export default hero;
