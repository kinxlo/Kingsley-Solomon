import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
  Center,
  Flex,
  useColorMode,
} from '@chakra-ui/react';

import { MdAnnouncement } from 'react-icons/md';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        color={colorMode == `light` ? `blue` : `lightBg`}
        gap={{ base: 0, sm: 2 }}
        flexDir={{ base: `column`, sm: `row` }}
        alignItems={`center`}
      >
        <Text
          textDecor={`underline`}
          fontSize={{ base: `xs`, lg: `xs` }}
          fontWeight={`light`}
          cursor={`pointer`}
          onClick={onOpen}
          as={`span`}
        >
          Inspiration & Reference
        </Text>
        <Text
          textTransform={`capitalize`}
          fontWeight={`light`}
          fontSize={{ base: `xs`, lg: `xs` }}
        >
          &copy;
          {new Date().getFullYear()} Kingsley Ifijeh
        </Text>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerContent
          bg={`lightBg`}
          h={{ base: `90vh`, sm: `50%` }}
          padding={`.5rem`}
        >
          <Center>
            <Text>Coming Soon...</Text>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
}
