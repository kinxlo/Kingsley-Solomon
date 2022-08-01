import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { MdClose } from 'react-icons/md';

const NotificationControls = () => {
  return (
    <Flex flexDirection={`column`}>
      <Icon className='hoverState' as={MdClose} />
      <Icon
        className='hoverState'
        marginY={`1rem`}
        as={MdClose}
      />
      <Icon className='hoverState' as={MdClose} />
    </Flex>
  );
};

export default NotificationControls;
