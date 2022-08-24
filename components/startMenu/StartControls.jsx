import {
  Box,
  Center,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  AiOutlineFileText,
  AiOutlineMenu,
} from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';
import contacts from '../../public/contact.js';

const StartControls = () => {
  const { getResume } = useContext(AppContext);
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
      <Center display={`flex`} flexDir={`column`} gap={5}>
        <Icon
          as={AiOutlineMenu}
          cursor={`pointer`}
          className={`accent`}
          fontSize={`1.3rem`}
        />
        <Icon
          onClick={getResume}
          cursor={`pointer`}
          as={AiOutlineFileText}
          className={`accent`}
          fontSize={`1.3rem`}
        />
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
