import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

const Bot = () => {
  const { mousePos, botMessage } = useContext(AppContext);

  return (
    <Box
      padding={`.5rem 1rem`}
      margin={`1rem`}
      borderRadius={10}
      shadow={`lg`}
      color={`lightBg`}
      bgColor={`green`}
      transition={`opacity 1s ease`}
      pos={`fixed`}
      zIndex={999}
      top={`${mousePos.codY}px`}
      left={`${mousePos.codX}px`}
      opacity={mousePos.opacity}
    >
      {botMessage}
    </Box>
  );
};

export default Bot;
