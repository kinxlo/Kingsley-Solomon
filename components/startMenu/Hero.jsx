import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Hero = ({ children }) => {
  return (
    <Box
      position={{ base: `sticky`, xl: `fixed` }}
      top={0}
      right={0}
      height={`100vh`}
      width={{ base: `100%`, xl: `50%` }}
      bg={`accent`}
      zIndex={{ base: 5, xl: -999 }}
    >
      {children}
    </Box>
  );
};

export default Hero;
{

}