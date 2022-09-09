import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';

const Intro = () => {
  const [title] = useState('Greetings!')
  const [message] = useState('I hear you are looking for a skilled web developer!')
  const text_1 = [...title].map((al, index) => {
    return (
      <Text
        id={al}
        as={`h1`}
        fontSize={`5rem`}
        className='letter font-serif'
        key={index}
      >
        {al}
      </Text>
    );
  });

  const text_2 = [...message].map((al, index) => {
    return (
      <Text
        id={al}
        fontSize={`2rem`}
        className='letter font-serif'
        key={index}
      >
        {al}
      </Text>
    );
  });

  const lastElement = text_2[text_2.length - 1].props.id

  const handleAnimationEnd = (e) => {
    // Router.push({ pathname: `/KS` })
  };

  useEffect(() => {
    document.getElementById(lastElement).addEventListener('animationend', handleAnimationEnd)
  })

  return (
    <Flex
      flexDir={`column`}
      justifyContent={`center`}
      textAlign={`center`}
      height={`100vh`}
      m={`auto`}
      p={`2rem`}
      overflow={`hidden`}
    >
      <Box>
        {text_1}
      </Box>
      <Box>{text_2}</Box>
    </Flex>
  );
};

export default Intro;
