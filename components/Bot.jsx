import React, { useContext } from 'react';
import { Text, useColorMode } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

const Bot = () => {
  const { mousePos, botMessage } = useContext(AppContext);
  const { colorMode } = useColorMode();

  return (
    <Text
      padding={`.5rem 1rem`}
      margin={`1rem`}
      shadow={`lg`}
      transition={`all 1s ease`}
      fontWeight={`bolder`}
      pos={`fixed`}
      zIndex={`-999`}
      color={`${
        colorMode == `light` ? `darkBg` : `lightBg`
      }`}
      opacity={`${colorMode == `light` ? `5%` : `3%`}`}
      top={`${mousePos.codY}px`}
      left={`${mousePos.codX}px`}
    >
      {botMessage}
    </Text>
  );
};

export default Bot;
