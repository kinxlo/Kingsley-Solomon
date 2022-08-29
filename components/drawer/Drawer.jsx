import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
  Flex,
} from '@chakra-ui/react';

import { FcAbout } from 'react-icons/fc';
import CTALayout from './CTALayout';
import Notification from './Notification';
import { functions } from '../../public/functions.js';
import MapView from '../MapView';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { AiOutlineLeft } from 'react-icons/ai';

export default function DrawerExample() {
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
      {/* <Icon
        as={FcAbout}
        onClick={handleClick}
        w={6}
        h={6}
      /> */}
      <Text
        onClick={handleClick}
        fontWeight={`bolder`}
        cursor={`pointer`}
        _hover={{ color: `#d000ff` }}
      >
        Reviews
      </Text>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          maxW={{ base: `100vw`, md: `30rem` }}
          padding={`0 1rem 1rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          <Flex
            py={5}
            justifyContent={`space-between`}
          >
            <Icon
              onClick={handleClick}
              className={`accent`}
              boxSize={`1.5rem`}
              as={AiOutlineLeft}
            />
            <Text
              textAlign={`right`}
              as={`h3`}
              className={`accent`}
            >
              Notificaions
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
