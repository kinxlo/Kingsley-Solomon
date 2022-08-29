import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { reviews } from '../../public/reviews';
import NotificationBar from './NotificationBar';

const Notification = () => {
  let noticeBox = reviews.map((review, index) => {
    return (
      <NotificationBar
        comment={review}
        key={index}
      ></NotificationBar>
    );
  });

  return (
    <Box
      className='hide-scrollbar'
      w={`100%`}
      h={`100%`}
      overflow={`scroll`}
    >
      {noticeBox}
    </Box>
  );
};

export default Notification;
