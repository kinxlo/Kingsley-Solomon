import { Box } from '@chakra-ui/react';
import React from 'react';

const Hero = ({ children }) => {
  return (
    <Box
      position={{ base: `sticky`, md: `fixed` }}
      top={0}
      right={0}
      height={`100vh`}
      width={{ base: `100%`, lg: `40%`, xl: `50%` }}
    >
      {children}
    </Box>
  );
};

export default Hero;
{
}
