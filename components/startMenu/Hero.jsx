import { Box } from '@chakra-ui/react';
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
      bg={`#00000010`}
      display={display}
      position={{
        base: `sticky`,
        // md: `${
        //   switchView == `profile` ? `sticky` : `fixed`
        // }`,
        lg: `fixed`,
      }}
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
