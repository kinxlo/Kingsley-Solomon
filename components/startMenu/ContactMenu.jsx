import {
  Icon,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import contacts from '../../public/contact.js';

const ContactMenu = () => {
  const { colorMode } = useColorMode();
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
    <div
      id='contacts'
      className='circular-menu circular-menu-left'
    >
      <Icon
        as={AiOutlineLink}
        className='floating-btn'
        onClick={() =>
          document
            .getElementById('contacts')
            .classList.toggle('active')
        }
      />

      <menu className='items-wrapper'>{socials}</menu>
    </div>
  );
};

export default ContactMenu;
