import {
  Box,
  Button,
  Center,
  Icon,
  IconButton,
  Link,
} from '@chakra-ui/react';
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AiOutlineFileText,
  AiOutlineProject,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiToolsLine } from 'react-icons/ri';
import {TbMenu} from 'react-icons/tb'
import { AppContext } from '../../context/AppContext';
import contacts from '../../public/contact.js';


const StartControls = () => {
  const { switchContent, toggleControls, getResume } =
    useContext(AppContext);

  const handleClick = (e) => {
    switchContent(e.currentTarget.getAttribute(`name`));
  };



  let socialContacts = contacts.map((social) => {
    return (
      <Link
        key={social.id}
        target='_blank'
        href={social.link}
      >
        <Icon
          as={social.icon}
          className={`accent`}
          fontSize={`1.5rem`}
        />
      </Link>
    );
  });

  return (
    <Box
      // background={`#595959`}
      position={{
        base: `sticky !important`,
        sm: `initial`,
      }}
      top={0}
      display={`flex`}
      height={{ base: `100vh`, sm: `initial` }}
      flexDir={`column`}
      justifyContent={`space-between`}
      padding={3}
    >
      <Center display={`flex`} flexDir={`column`} gap={7}>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='menu'
          onClick={toggleControls}
          className={`accent nav-btn`}
          size={`xs`}
        >
          <Icon fontSize={`1.5rem`} as={TbMenu} />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='profile'
          onClick={handleClick}
          className={`accent nav-btn`}
          display={{ base: `block`, sm: `none` }}
          size={`xs`}
        >
          <Icon as={AiOutlineUser} fontSize={`1.5rem`} />
        </Button>

        {/* icon switch */}
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='resume'
          onClick={getResume}
          className={`accent nav-btn`}
          size={`xs`}
          display={{ base: `none`, sm: `block` }}
        >
          <Icon
            as={AiOutlineFileText}
            fontSize={`1.5rem`}
          />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='resume'
          onClick={handleClick}
          className={`accent nav-btn`}
          size={`xs`}
          display={{ base: `block`, sm: `none` }}
        >
          <Icon
            as={AiOutlineFileText}
            fontSize={`1.5rem`}
          />
        </Button>
        {/* end of icon switch */}

        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='tools'
          onClick={handleClick}
          className={`accent nav-btn`}
          size={`xs`}
        >
          <Icon
            display={{ base: `block`, sm: `none` }}
            as={RiToolsLine}
            fontSize={`1.5rem`}
          />
        </Button>
      </Center>
      <Center
        height={`40%`}
        flexDir={`column`}
        justifyContent={`space-between`}
      >
        {socialContacts}
      </Center>
    </Box>
  );
};

export default StartControls;
