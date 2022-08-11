import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Fillers = ({ image, text }) => {
  return (
    <Box boxSize='xs' margin={`7rem auto`}>
      <Image src={image} alt='img' opacity={0.4} />
      <Text textAlign={`center`}>{text}</Text>
    </Box>
  );
};

export default Fillers;
