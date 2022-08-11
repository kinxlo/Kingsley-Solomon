import {
  Menu,
  Icon,
  MenuButton,
  MenuList,
  Box,
  Center,
} from '@chakra-ui/react';
import language from '../../public/language.js';
import tools from '../../public/tools';
import contacts from '../../public/contact';

import React from 'react';

import {
  AiOutlineFile,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineGoogle,
  AiOutlineMenu,
} from 'react-icons/ai';
import { TbBrandKickstarter } from 'react-icons/tb';

import ProductivityLayout from './ProductivityLayout';
import Profile from './Profile';
import ProjectBox from '../drawer/ProjectBox.jsx';

const Start = () => {
  return (
    <Menu placement={`top`} flip gutter={8}>
      <MenuButton>
        <Icon
          as={TbBrandKickstarter}
          w={{ base: `6`, sm: `7` }}
          h={{ base: `6`, sm: `8` }}
          display={`block`}
          // fontSize={`1.5rem`}
        />
      </MenuButton>

      <MenuList
        borderRadius={0}
        className='theme'
        display={`flex`}
        width={`60rem`}
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
            <Icon
              as={AiOutlineMenu}
              className={`accent`}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              fontSize={`1.3rem`}
            />
          </Center>
          <Center
            height={`40%`}
            flexDir={`column`}
            justifyContent={`space-between`}
          >
            <Icon
              as={AiOutlineLinkedin}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
            <Icon
              as={AiOutlineFile}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
            <Icon
              as={AiOutlineGithub}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
            <Icon
              as={AiOutlineTwitter}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
            <Icon
              as={AiOutlineWhatsApp}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
            <Icon
              as={AiOutlineGoogle}
              filter={`drop-shadow(1px 5px 3px #010101)`}
              className={`accent`}
              fontSize={`1.3rem`}
            />
          </Center>
        </Box>
        <Box
          px={3}
          pt={3}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          w={`35%`}
        >
          <Profile />
          {/* PROJECT DISPLAY */}
          <Box
            px={3}
            height={`100%`}
            overflow={`scroll`}
            className={`hide-scrollbar`}
          >
            <ProjectBox />
          </Box>
        </Box>
        <Box
          className='hide-scrollbar '
          w={`50%`}
          p={3}
          overflow={`scroll`}
        >
          <ProductivityLayout
            title={`Languages & Frameworks`}
            document={language}
          />
          <ProductivityLayout
            title={`Tools`}
            document={tools}
          />
        </Box>
      </MenuList>
    </Menu>
  );
};

export default Start;
