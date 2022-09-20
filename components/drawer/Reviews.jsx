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
  Button,
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
      <Flex
        justifyContent={`center`}
        onClick={handleClick}
        className={`quil_box action-btn`}
      >
        <Image
          as={`img`}
          cursor={`pointer`}
          alt='scroll'
          src='https://img.icons8.com/officel/30/000000/magical-scroll.png'
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          backgroundColor={`lightBg`}
          color={`darkBg`}
          maxW={{ base: `100vw`, md: `40rem` }}
          padding={`0 1rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          <Flex
            alignItems={`start`}
            p={`2rem`}
            gap={`3rem`}
          >
            <Image
              onClick={handleClick}
              borderRadius={`100%`}
              cursor={`pointer`}
              alt='img'
              src='https://img.icons8.com/officel/20/000000/back.png'
            />

            <Box>
              <Text
                className='font-display slide-project'
                textTransform={`capitalize`}
                fontWeight={700}
                color={`darkBg`}
                letterSpacing={`1px`}
                fontSize={{
                  base: `xl`,
                  sm: ``,
                  md: ``,
                  lg: ``,
                }}
              >
                Reviews
              </Text>
              {/* <Text
                className='slide-project'
                fontSize={{
                  base: `12px`,
                  lg: `14px`,
                }}
              >
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Praesentium iure nobis
                quas placeat voluptatem, consequuntur
                provident iusto tenetur aliquam accusamus!
              </Text> */}
            </Box>
          </Flex>
          <Notification />
        </DrawerContent>
      </Drawer>
    </>
  );
}
