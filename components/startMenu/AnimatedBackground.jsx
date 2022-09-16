import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { profile } from '../../gsap';

const AnimatedBackground = () => {
  const [cube] = useState([...Array(500)]);

  return (
    <Flex
      p={1}
      overflow={`hidden`}
      justifyContent={`space-evenly`}
      flexWrap={`wrap`}
      gap={1}
      width={`100%`}
      height={`100%`}
      //   border={`1px solid red`}
      pos={`absolute`}
      top={0}
      left={0}
      zIndex={-1}
      // bg={`green`}
    ></Flex>
  );
};

export default AnimatedBackground;
