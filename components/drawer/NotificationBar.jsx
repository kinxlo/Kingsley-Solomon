import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import NotificationControls from './NotificationControls';
import { BsDot } from 'react-icons/bs';

const NotificationBar = ({ comment }) => {
  const { name, image, job, review } = comment;
  return (
    <Box
      width={`100%`}
      overflow={`scroll`}
      className={`hide-scrollbar`}
      display={`flex`}
      alignItems={`top`}
      padding={`2rem`}
      background={{ base: `#00000090`, sm: `none` }}
      mb={3}
      gap={3}
    >
      <Avatar
        name='Dan Abrahmov'
        src='https://bit.ly/dan-abramov'
        size={`lg`}
        marginY={2}
      />
      <Box>
        <Flex alignItems={`center`}>
          <Text
            fontSize={{ base: `12px`, md: `12px` }}
            fontWeight={700}
          >
            {name}
          </Text>
          <Icon color={`#fff`} as={BsDot} />
          <Text
            className='accent'
            fontSize={{ base: `10px`, md: `12px` }}
            fontWeight={200}
          >
            {job}
          </Text>
        </Flex>
        <Text
          mt={1}
          fontSize={{ base: `10px`, md: `12px` }}
        >
          {review}
        </Text>
      </Box>
      {/* <NotificationControls /> */}
    </Box>
  );
};

export default NotificationBar;
