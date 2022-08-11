import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import NotificationControls from './NotificationControls';

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
      >
        <Text fontWeight={500} fontSize={`2xl`} as={`h1`}>
          Lorem ipsum dolor sit amet.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dicta at, dolore natus incidunt voluptas
          provident deserunt voluptatum quibusdam delectus
          in. Laudantium accusantium illo quam aliquam
          asperiores molestias architecto cum in.
        </Text>
      </Box>
      <NotificationControls />
    </Box>
  );
};

export default NotificationBar;
