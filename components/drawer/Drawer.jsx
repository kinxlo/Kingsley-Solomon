import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
  Flex,
  useColorMode,
} from '@chakra-ui/react';

import Notification from './Notification';
import MapView from '../MapView';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { AiOutlineLeft } from 'react-icons/ai';

export default function DrawerExample() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleMapNotice } = useContext(AppContext);

  const handleClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Text
        className='font-mono'
        onClick={handleClick}
        fontWeight={`bolder`}
        cursor={`pointer`}
        _hover={{ color: `#d000ff` }}
        verticalAlign={`bottom!`}
      >
        Reviews
      </Text>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        // closeOnOverlayClick={false}
      >
        <DrawerContent
          // className='blur'
          background={
            colorMode == `light` ? `#1a202c` : `#ffffff`
          }
          color={
            colorMode == `light` ? `#ffffff` : `#000000`
          }
          maxW={{ base: `100vw`, md: `30rem` }}
          padding={`0 1rem 1rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          <Flex py={5} justifyContent={`space-between`}>
            <Icon
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

          {toggleMapNotice.showMap ? (
            <MapView />
          ) : (
            <Notification />
          )}
          {/* <CTALayout
            functions={functions}
            title={`functions`}
          /> */}
          {/* <SliderComponent /> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
