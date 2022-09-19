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
      <Text
        color={`blue`}
        textDecorationStyle={`dashed`}
        textDecoration={`underline`}
        textTransform={`capitalize`}
        fontWeight={`light`}
        fontSize={{ base: `sm`, lg: `xs` }}
      >
        <Text
          fontSize={{ base: `sm`, lg: `xs` }}
          cursor={`pointer`}
          onClick={onOpen}
          as={`span`}
        >
          Reference
        </Text>{' '}
        | &copy;
        {new Date().getFullYear()}
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
