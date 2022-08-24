import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { FcAbout } from 'react-icons/fc';
import CTALayout from './CTALayout';
import Notification from './Notification';
import { functions } from '../../public/functions.js';
import MapView from '../MapView';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

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
      <Icon
        as={FcAbout}
        onClick={handleClick}
        w={6}
        h={6}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          maxW={{ base: `100vw`, md: `30rem` }}
          maxH={{ base: `100vh`, md: `95vh` }}
          padding={`.5rem`}
          // paddingBottom={`3.4rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          {toggleMapNotice.showMap ? (
            <MapView />
          ) : (
            <Notification />
          )}
          <CTALayout
            functions={functions}
            title={`functions`}
          />
          {/* <SliderComponent /> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
