import {
  Menu,
  Icon,
  MenuButton,
  MenuList,
  Box,
  Image,
  Center,
} from '@chakra-ui/react';
import language from '../../public/language.js';
import tools from '../../public/tools';
import contacts from '../../public/contact';

import React from 'react';
import {
  MdBubbleChart,
  MdMenu,
  MdAccountCircle,
} from 'react-icons/md';
import { AiOutlineFile } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';
import {
  IoMdImages,
  IoMdCog,
  IoMdPower,
} from 'react-icons/io';
import ProductivityLayout from './ProductivityLayout';
import Profile from './Profile';

const Start = () => {
  return (
    <Menu placement={`top`} flip gutter={8}>
      <MenuButton>
        <Icon
          as={MdBubbleChart}
          w={{ base: `6`, sm: `8` }}
          h={{ base: `6`, sm: `8` }}
          display={`block`}
        />
      </MenuButton>

      <MenuList
        borderRadius={0}
        className='theme'
        display={`flex`}
        minW={{ base: `100vw`, sm: `60rem` }}
        height={{ base: `90vh`, sm: `50rem` }}
        padding={0}
        border={0}
        margin={0}
      >
        <Box
          // background={`#595959`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`space-between`}
          padding={3}
          // w={`5%`}
        >
          <Center>
            <MdMenu
              className={`accent`}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              fontSize={`1.5rem`}
            />
          </Center>
          <Center
            height={`40%`}
            flexDir={`column`}
            justifyContent={`space-between`}
          >
            <MdAccountCircle
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.5rem`}
            />
            <AiOutlineFile
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.5rem`}
            />
            <IoMdImages
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.5rem`}
            />
            <IoMdCog
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.5rem`}
            />
            <IoMdPower
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.5rem`}
            />
          </Center>
        </Box>
        <Box p={3} w={`35%`}>
          <Profile />
        </Box>
        <Box
          className='hide-scrollbar '
          w={`50%`}
          p={3}
          overflow={`scroll`}
        >
          <ProductivityLayout
            title={`Languages`}
            document={language}
          />
          <ProductivityLayout
            title={`Tools`}
            document={tools}
          />
          <ProductivityLayout
            title={`Contacts`}
            document={contacts}
          />
        </Box>
      </MenuList>
    </Menu>
  );
};

export default Start;
