import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
  Flex,
  useColorMode,
  Image,
  Box,
} from '@chakra-ui/react';
import Notification from './Notification';
import { AiOutlineLeft } from 'react-icons/ai';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function DrawerExample() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleMouseEnter } = useContext(AppContext);

  const handleClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Box
        boxSize={`5em`}
        className={`quil_box`}
        title={`see what folks are saying about me`}
      >
        <Image
          onMouseEnter={(event) =>
            handleMouseEnter(event, 'Some Folks said some nice things about me...')
          }
          className='buzz'
          as={`img`}
          onClick={handleClick}
          cursor={`pointer`}
          alt='quill'
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1662597051/portfolio/305273_qoa0qn.svg`}
          filter={
            colorMode == `light`
              ? `invert(0)`
              : `invert(100%)`
          }
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          backgroundColor={
            colorMode == `light` ? `darkBg` : `lightBg`
          }
          color={
            colorMode == `light` ? `lightBg` : `darkBg`
          }
          maxW={{ base: `100vw`, md: `40rem` }}
          padding={`0 1rem 1rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          <Flex
            alignItems={`center`}
            p={`2rem`}
            gap={`3rem`}
          >
            <Icon
              onClick={handleClick}
              boxSize={`1.5rem`}
              as={AiOutlineLeft}
            />
            <Text
              fontSize={`large`}
              fontWeight={`bold`}
              as={`h3`}
            >
              Reviews
            </Text>
          </Flex>
          <Notification />
        </DrawerContent>
      </Drawer>
    </>
  );
}
