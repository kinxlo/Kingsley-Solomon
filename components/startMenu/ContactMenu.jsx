import {
  Box,
  Icon,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { AppContext } from '../../context/AppContext.js';
import contacts from '../../public/contact.js';

const ContactMenu = () => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);
  const active = {
    color:
      colorMode == `light` ? `matrixDark` : `matrixLight`,
  };
  let socials = contacts.map((social) => {
    return (
      <Link
        className='menu-item menu-item-left'
        key={social.id}
        target='_blank'
        href={social.link}
      >
        <Text
          color={
            colorMode == `light` ? `accent` : `lightBg`
          }
          fontWeight={600}
          fontSize={{ base: `12px`, md: `14px` }}
          _hover={active}
        >
          {social.text}
        </Text>
      </Link>
    );
  });

  return (
    <Box
      onClick={() =>
        document
          .getElementById('contacts')
          .classList.toggle('active')
      }
      id='contacts'
      className='circular-menu circular-menu-left action-btn'
    >
      <Image
        className='floating-btn '
        src="https://img.icons8.com/officel/30/000000/email.png"
        alt='socials'
      />
      <menu className='items-wrapper'>{socials}</menu>
    </Box>
  );
};

export default ContactMenu;
