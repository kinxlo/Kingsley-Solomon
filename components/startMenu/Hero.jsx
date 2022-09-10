import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Hero = ({ children }) => {
  return (
    <Box
      position={{ base: `sticky`, lg: `fixed` }}
      top={0}
      right={0}
      height={`100vh`}
      width={{ base: `100%`, lg: `40%`, xl: `50%` }}
      // zIndex={{ base: 5 }}
    >
      {children}
    </Box>
  );
};

export default Hero;
{
}
