import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { MdAnnouncement } from 'react-icons/md';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        placement='bottom'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          w={{ base: `100vw`, sm: `60rem` }}
          h={{ base: `90vh`, sm: `50rem` }}
          padding={`.5rem`}
          paddingBottom={`3.4rem`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        ></DrawerContent>
      </Drawer>
    </>
  );
}
