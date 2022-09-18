import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Hero = ({ children }) => {
  const { switchView } = useContext(AppContext);
  const display = {
    base: switchView == `projects` ? `none` : `block`,
    md: `block`,
  };
  return (
    <Box
      bg={switchView !== `projects` ? `none` : `#00000010`}
      display={display}
      position={{
        base: `sticky`,
        lg: `fixed`,
      }}
      top={0}
      right={0}
      height={`100vh`}
      width={{ base: `100%`, lg: `40%`, xl: `50%` }}
    >
      {children}
      <Flex
        px={`1.5em`}
        width={`100%`}
        pos={`absolute`}
        bottom={`1.5em`}
        zIndex={999}
        as={`span`}
        letterSpacing={`1px`}
        justifyContent={{ base: `center`, lg: `start` }}
      >
        <Text fontSize={`xs`}>Photo Credit: @kinxlo</Text>
      </Flex>
    </Box>
  );
};

export default Hero;
