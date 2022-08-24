import React from 'react';
import { Text } from '@chakra-ui/react';

const Time = ({ time, session }) => {
  return (
    <Text color={`#fff`} fontSize={`3rem`}>
      {time}{' '}
      <Text color={`#fff`} as={`span`} fontSize={`1.5rem`}>
        {session}
      </Text>
    </Text>
  );
};

export default Time;
