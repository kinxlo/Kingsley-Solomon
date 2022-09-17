// import Image from 'next/image';
import { Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const PreLoader = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      alignItems={`center`}
      justifyContent={`center`}
      w={`100%`}
      h={`100vh`}
    >
      <Text
        textAlign={`center`}
        className='font-mono'
        fontSize={`md`}
        fontWeight={`bold`}
        color={colorMode == `light` ? `accent` : `lightBg`}
      >
        ...Go, grab a coffee
      </Text>
    </Flex>
  );
};

export default PreLoader;
