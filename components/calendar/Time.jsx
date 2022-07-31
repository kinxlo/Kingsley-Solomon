import React from 'react';
import { Text } from '@chakra-ui/react';

const Time = ({ time, session }) => {
  return (
    <Text fontSize={`3rem`}>
      {time}{' '}
      <Text as={`span`} fontSize={`1.5rem`}>
        {session}
      </Text>
    </Text>
  );
};

export default Time;
