import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Reviews from '../drawer/Reviews';

const ContactMenu = () => {
  const { colorMode } = useColorMode();
  const {
    switchContent,
    switchView,
    handleMouseEnter,
    handleMouseLeave,
  } = useContext(AppContext);
  const [active] = useState({
    backgroundColor: `transparent !important`,
    color:
      colorMode == `light` ? `matrixDark!` : `matrixLight!`,
  });

  const handleClick = (e) => {
    switchContent(e.currentTarget.getAttribute(`value`));
  };

  return (
    <div
      id='menu'
      className='circular-menu circular-menu-top action-btn'
    >
      <Image
        className='floating-btn '
        onClick={() =>
          document
            .getElementById('menu')
            .classList.toggle('active')
        }
        src='https://img.icons8.com/officel/30/000000/hamburger.png'
        alt='img'
      />

      <menu className='items-wrapper'>
        <Button
          className='menu-item'
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          value='profile'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `profile` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Flex
            transform={`scale(0.8)`}
            flexDir={`column`}
            justifyContent={`center`}
            gap={1}
          >
            <Image
              src='https://img.icons8.com/officel/30/000000/user-male-skin-type-5.png'
              alt='img'
            />
            <Text
              color={
                colorMode == `light` &&
                switchView !== `profile`
                  ? `darkBg`
                  : `lightBg`
              }
              fontSize={`xs`}
            >
              profile
            </Text>
          </Flex>
        </Button>
        <Button
          className='menu-item'
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          color={`accent`}
          isActive={switchView == `resume` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Flex
            transform={`scale(0.8)`}
            flexDir={`column`}
            justifyContent={`center`}
            gap={1}
          >
            <Reviews />
            <Text
              color={
                colorMode == `light` &&
                switchView !== `profile`
                  ? `darkBg!`
                  : `lightBg!`
              }
              fontSize={`xs`}
            >
              Reviews
            </Text>
          </Flex>
        </Button>
        <Button
          className='menu-item'
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          value='projects'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `projects` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Flex
            transform={`scale(0.65)`}
            flexDir={`column`}
            justifyContent={`center`}
            gap={1}
          >
            <Image
              src='https://img.icons8.com/officel/30/000000/web-design.png'
              alt='img'
            />
            <Text
              color={
                colorMode == `light` &&
                switchView !== `profile`
                  ? `darkBg`
                  : `lightBg`
              }
              fontSize={`xs`}
            >
              Projects
            </Text>
          </Flex>
        </Button>
        <Button
          className='menu-item'
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          value='tools'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `tools` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Flex
            transform={`scale(0.65)`}
            flexDir={`column`}
            justifyContent={`center`}
            gap={1}
          >
            <Image
              src='https://img.icons8.com/officel/30/000000/drafting-compass2.png'
              alt='img'
            />
            <Text
              color={
                colorMode == `light` &&
                switchView !== `profile`
                  ? `darkBg`
                  : `lightBg`
              }
              fontSize={`xs`}
            >
              Languages
            </Text>
          </Flex>
        </Button>
      </menu>
    </div>
  );
};

export default ContactMenu;
