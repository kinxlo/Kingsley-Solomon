import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Notification = () => {
  return (
    <Box w={`100%`} h={`100%`}>
      <Text textAlign={`right`} as={`h3`} className={`accent`}>Manage notificaions</Text>
    </Box>
  );
};

export default Notification;
