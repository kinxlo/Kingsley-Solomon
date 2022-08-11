import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { MdAnnouncement } from 'react-icons/md';
import CTALayout from './CTALayout';
import Notification from './Notification';
import { functions } from '../../public/functions.js';
import SliderComponent from './SliderComponent';
import MapView from '../MapView';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleMapNotice } = useContext(AppContext);

  return (
    <>
      <Icon
        as={MdAnnouncement}
        onClick={onOpen}
        w={{ base: `4`, sm: `6` }}
        h={{ base: `4`, sm: `6` }}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          maxW={{ base: `100vw`, md: `30rem` }}
          maxH={`100vh`}
          padding={`.5rem`}
          paddingBottom={`3rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          {toggleMapNotice.showMap ? <MapView /> : <Notification />}
          <CTALayout
            functions={functions}
            title={`functions`}
          />
          <SliderComponent />
        </DrawerContent>
      </Drawer>
    </>
  );
}