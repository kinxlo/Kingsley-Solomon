import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import NotificationBar from './NotificationBar';

const Notification = () => {
  let noticeBox = [0, 0, 0, 0, 0].map((box, index) => {
    return <NotificationBar key={index}></NotificationBar>;
  });

  return (
    <Box
      className='hide-scrollbar'
      w={`100%`}
      h={`100%`}
      overflow={`scroll`}
    >
      <Text
        textAlign={`right`}
        as={`h3`}
        className={`accent`}
      >
        Notificaions
      </Text>
      {noticeBox}
    </Box>
  );
};

export default Notification;
