import {
  Button,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import {
  AiOutlineFileText,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineUser,
} from 'react-icons/ai';
import { RiToolsLine } from 'react-icons/ri';
import { AppContext } from '../../context/AppContext';

const ContactMenu = () => {
  const { colorMode } = useColorMode();
  const { switchContent, switchView } =
    useContext(AppContext);
  const [active] = useState({
    backgroundColor: `transparent !important`,
    color:
      colorMode == `light` ? `matrixDark!` : `matrixLight!`,
  });

  const handleClick = (e) => {
    switchContent(e.currentTarget.getAttribute(`name`));
  };

  return (
    <div
      id='menu'
      className='circular-menu circular-menu-top'
    >
      <Icon
        as={AiOutlineMenu}
        className='floating-btn'
        onClick={() =>
          document
            .getElementById('menu')
            .classList.toggle('active')
        }
      />

      <menu className='items-wrapper'>
        <Button
          className='menu-item'
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
          className='menu-item'
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
          className='menu-item'
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
          className='menu-item'
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
      </menu>
    </div>
  );
};

export default ContactMenu;
