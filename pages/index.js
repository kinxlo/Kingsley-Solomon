import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';

const Intro = () => {
  const [title] = useState('Hello,')
  const [message] = useState(`I hear you are looking for a skilled web developer.`)

  const text_1 = [...title].map((al, index) => {
    return (
      <Text
        color={`accent`}
        id={al}
        as={`h1`}
        fontSize={`3rem`}
        fontWeight={`900`}
        fontStyle={`italic`}
        className='letter font-serif'
        key={index}
      >
        {al}
      </Text>
    );
  });

  const handleAnimationEnd = (e) => {
    Router.push({ pathname: `/KS` })
  };

  useEffect(() => {
    const lastElement = document.getElementById(`lastElement`)
    lastElement.addEventListener('animationend', handleAnimationEnd)
  })

  return (
    <Flex
      flexDir={`column`}
      justifyContent={`end`}
      // alignItems={`center`}
      height={`100vh`}
      m={`auto`}
      padding={`2rem`}
      overflow={`hidden`}
    >
      <Box>
        <Box className='text-top'>
          {text_1}
        </Box>
        <Box alignItems={`baseline`} justifyContent={`center`}>
          <Text as={`span`} className={`letter msg`}>I</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>h</Text>
          <Text as={`span`} className={`letter msg`}>e</Text>
          <Text as={`span`} className={`letter msg`}>a</Text>
          <Text as={`span`} className={`letter msg`}>r</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>y</Text>
          <Text as={`span`} className={`letter msg`}>o</Text>
          <Text as={`span`} className={`letter msg`}>u</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>a</Text>
          <Text as={`span`} className={`letter msg`}>r</Text>
          <Text as={`span`} className={`letter msg`}>e</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>l</Text>
          <Text as={`span`} className={`letter msg`}>o</Text>
          <Text as={`span`} className={`letter msg`}>o</Text>
          <Text as={`span`} className={`letter msg`}>k</Text>
          <Text as={`span`} className={`letter msg`}>i</Text>
          <Text as={`span`} className={`letter msg`}>n</Text>
          <Text as={`span`} className={`letter msg`}>g</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>f</Text>
          <Text as={`span`} className={`letter msg`}>o</Text>
          <Text as={`span`} className={`letter msg`}>r</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>a</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} className={`letter msg`}>s</Text>
          <Text as={`span`} className={`letter msg`}>k</Text>
          <Text as={`span`} className={`letter msg`}>i</Text>
          <Text as={`span`} className={`letter msg`}>l</Text>
          <Text as={`span`} className={`letter msg`}>l</Text>
          <Text as={`span`} className={`letter msg`}>e</Text>
          <Text as={`span`} className={`letter msg`}>d</Text>
          <Text as={`span`} className={`letter msg`}>&nbsp;</Text>
          <Text as={`span`} fontWeight={`medium`} color={`accent`} className={`msg letter`}>D</Text>
          <Text as={`span`} fontWeight={`medium`} color={`accent`} className={`msg letter`}>E</Text>
          <Text as={`span`} fontWeight={`medium`} color={`accent`} className={`msg letter`}>V</Text>
          {/* <Text as={`span`} className={`msg letter`}>e</Text>
          <Text as={`span`} className={`msg letter`}>l</Text>
          <Text as={`span`} className={`msg letter`}>o</Text>
          <Text as={`span`} className={`msg letter`}>p</Text>
          <Text as={`span`} className={`msg letter`}>e</Text>
          <Text as={`span`} className={`msg letter`}>r</Text> */}
          <Text id='lastElement' as={`span`} className={`msg letter`}>.</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Intro;
