import { Box } from '@chakra-ui/react';
import React from 'react';
import NotificationControls from './NotificationControls';

const NotificationBar = () => {
  return (
    <Box
      //   className='hoverState'
      display={`flex`}
      justifyContent={`end`}
      width={`100%`}
      height={`10rem`}
      marginY={`1rem`}
      padding={`.5rem`}
      gap={3}
      background={`#59595950`}
    >
      <Box
        width={`100%`}
        height={`100%`}
        overflow={`scroll`}
        className={`hide-scrollbar`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Libero totam eius molestiae quasi voluptatibus
        non, vero porro impedit, illum repellendus,
        reiciendis magnam in? Voluptatem fuga et, dicta
        expedita possimus ipsum.
      </Box>
      <NotificationControls />
    </Box>
  );
};

export default NotificationBar;
