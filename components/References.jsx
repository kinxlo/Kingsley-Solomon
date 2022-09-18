import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
} from '@chakra-ui/react';

import { MdAnnouncement } from 'react-icons/md';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text onClick={onOpen} fontSize={`xs`}>
        Reference
      </Text>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerContent
          bg={`lightBg`}
          h={{ base: `90vh`, sm: `50%` }}
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
