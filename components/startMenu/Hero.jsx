import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Controls from '../Controls';

const Hero = ({ children }) => {
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
      <Flex
        justifyContent={`end`}
        pb={5}
        px={10}
        width={`100%`}
        pos={`fixed`}
        bottom={0}
        left={0}
        zIndex={10}
      >
        <Controls />
      </Flex>
    </Box>
  );
};

export default Hero;
