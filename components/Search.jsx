import {
  Menu,
  Icon,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';

import React from 'react';
import { MdSearch } from 'react-icons/md';

const Start = () => {
  return (
    <Menu placement={`top`} gutter={12}>
      <MenuButton marginX={`1rem`}>
        <Icon
          display={`block`}
          as={MdSearch}
          w={{ base: `4`, sm: `6` }}
          h={{ base: `4`, sm: `6` }}
        />
      </MenuButton>
      <MenuList
        borderRadius={0}
        className='theme'
        minW={{ base: `100vw`, sm: `45rem` }}
        height={{ base: `100vh`, sm: `45rem` }}
        border={0}
        margin={0}
      ></MenuList>
    </Menu>
  );
};

export default Start;
