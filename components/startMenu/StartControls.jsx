import { Box, Center, Icon, Link } from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  AiOutlineFileText,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineUser,
} from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';
import contacts from '../../public/contact.js';
import Search from '../searchBar/Search';

const StartControls = () => {
  const { switchContent, toggleControls } = useContext(AppContext);

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
          fontSize={`1.3rem`}
        />
      </Link>
    );
  });
  return (
    <Box
      // background={`#595959`}
      display={`flex`}
      flexDir={`column`}
      justifyContent={`space-between`}
      padding={3}
    >
      <Center display={`flex`} flexDir={`column`} gap={7}>
        <Icon
          name='menu'
          onClick={toggleControls}
          as={AiOutlineMenu}
          cursor={`pointer`}
          className={`accent`}
          fontSize={`1.3rem`}
        />
        <Icon
          name='profile'
          onClick={handleClick}
          display={{ base: `block`, sm: `none` }}
          cursor={`pointer`}
          as={AiOutlineUser}
          className={`accent`}
          fontSize={`1.3rem`}
        />
        <Icon
          name='resume'
          onClick={handleClick}
          cursor={`pointer`}
          as={AiOutlineFileText}
          className={`accent`}
          fontSize={`1.3rem`}
        />
        <Icon
          name='projects'
          onClick={handleClick}
          display={{ base: `block`, sm: `none` }}
          cursor={`pointer`}
          as={AiOutlineProject}
          className={`accent`}
          fontSize={`1.3rem`}
        />
        <Search />
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
