import {
  Box,
  Button,
  Center,
  Icon,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import {
  AiOutlineFileText,
  AiOutlineProject,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  RiMoonClearFill,
  RiSunFill,
  RiToolsLine,
} from 'react-icons/ri';
import { TbMenu } from 'react-icons/tb';
import { AppContext } from '../../context/AppContext';
import contacts from '../../public/contact.js';

const StartControls = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { switchContent, toggleControls, switchView } =
    useContext(AppContext);
  const [active] = useState({
    backgroundColor: `transparent !important`,
    color: `active!`,
  });

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
          color={`accent`}
          fontSize={`1.3rem`}
          _hover={{ color: `active` }}
        />
      </Link>
    );
  });

  return (
    <Box
      width={`3rem`}
      position={`fixed`}
      zIndex={999}
      top={0}
      display={`flex`}
      height={`100vh`}
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
          size={`xs`}
        >
          <Icon fontSize={`1.3rem`} as={TbMenu} />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='profile'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `profile` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Icon as={AiOutlineUser} fontSize={`1.3rem`} />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='resume'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `resume` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Icon
            as={AiOutlineFileText}
            fontSize={`1.3rem`}
          />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='projects'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `projects` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Icon as={AiOutlineProject} fontSize={`1.3rem`} />
        </Button>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='tools'
          onClick={handleClick}
          color={`accent`}
          isActive={switchView == `tools` ? true : false}
          _hover={active}
          _active={active}
          _focus={active}
          size={`xs`}
        >
          <Icon as={RiToolsLine} fontSize={`1.3rem`} />
        </Button>
      </Center>
      <Center>
        <Button
          p={0}
          borderRadius={`100%`}
          backgroundColor={`transparent`}
          name='theme'
          onClick={toggleColorMode}
          _hover={active}
          size={`xs`}
        >
          <Icon
            as={
              colorMode == `light`
                ? RiMoonClearFill
                : RiSunFill
            }
            fontSize={`1.3rem`}
          />
        </Button>
      </Center>
      <Center
        className='line-v1'
        height={`50%`}
        flexDir={`column`}
        justifyContent={`space-between`}
        gap={7}
      >
        {socialContacts}
      </Center>
    </Box>
  );
};

export default StartControls;
