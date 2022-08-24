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

const NotificationBar = () => {
  return (
    <Box
      //   className='hoverState'
      display={`flex`}
      justifyContent={`end`}
      width={`100%`}
      marginY={`1rem`}
      padding={`1rem`}
      gap={3}
      background={`#59595950`}
    >
      <Box
        width={`100%`}
        height={`100%`}
        overflow={`scroll`}
        // margin={`1rem`}
        className={`hide-scrollbar`}
        display={`flex`}
        alignItems={`top`}
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
            <Text fontSize={`16px`} fontWeight={600}>
              Kingsley Solomon
            </Text>
            <Icon as={BsDot} />
            <Text fontSize={`14px`} fontWeight={200}>
              Frontend Developer
            </Text>
          </Flex>
          <Text
            textAlign={`justify`}
            fontSize={`14px`}
            fontWeight={200}
          >
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente, molestias obcaecati
            quod dolorum possimus fugit, natus impedit
            ratione deserunt perspiciatis sint magnam
            praesentium laboriosam animi, similique
            laudantium? Delectus praesentium nihil nemo, nam
            voluptate itaque
          </Text>
        </Box>
      </Box>
      {/* <NotificationControls /> */}
    </Box>
  );
};

export default NotificationBar;
