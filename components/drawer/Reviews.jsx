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

export default function DrawerExample() {
  const { colorMode } = useColorMode();
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
      <Box
        boxSize={`5em`}
        className={`quil_box`}
        title={`see what folks are saying about me`}
      >
        <Image
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
          <Flex alignItems={`center`} py={5}>
            <Icon
              mr={`1rem`}
              onClick={handleClick}
              boxSize={`1.5rem`}
              as={AiOutlineLeft}
            />
            <Text
              fontWeight={`bold`}
              textAlign={`right`}
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
