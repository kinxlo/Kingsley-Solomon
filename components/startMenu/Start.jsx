import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Box,
  Image,
} from '@chakra-ui/react';

import { programming_languages } from '../../public/tools';
import ProjectBox from '../drawer/ProjectBox';
import ProductivityLayout from './ProductivityLayout';
import Profile from './Profile';
import StartControls from './StartControls';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Image
        marginRight={3}
        boxSize={`1.5rem`}
        onClick={handleClick}
        alt='img'
        src='https://img.icons8.com/color/48/000000/user-skin-type-7.png'
      />

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        autoFocus={false}
      >
        <DrawerContent
          className='theme'
          display={`flex`}
          flexDir={`row`}
          border={0}
          margin={0}
          padding={0}
          pb={`3rem`}
          borderRadius={0}
          width={`60rem`}
          w={{ base: `100vw`, md: `60rem` }}
          h={{ base: `100vh`, md: `50rem` }}
        >
          <StartControls />
          <Box
            p={3}
            display={{ base: `none`, md: `flex` }}
            // flexDir={`column`}
            // justifyContent={`end`}
            w={`35%`}
          >
            <Profile />
            {/* PROJECT DISPLAY */}
            {/* <Box
              px={3}
              height={`100%`}
              overflow={`scroll`}
              className={`hide-scrollbar`}
            >
              <ProjectBox />
            </Box> */}
          </Box>
          <Box
            className='hide-scrollbar'
            w={{ base: `100%`, sm: `70%`, md: `50%` }}
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
