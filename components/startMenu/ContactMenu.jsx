import {
  Icon,
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
          data-message={social.msg}
          onMouseEnter={(event) => handleMouseEnter(event)}
          onMouseLeave={handleMouseLeave}
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
      className='circular-menu circular-menu-left action-btn'
    >
      <Icon
        as={AiOutlineLink}
        className='floating-btn '
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
