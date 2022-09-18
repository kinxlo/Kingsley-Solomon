import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import ProjectDesc from './ProjectDesc';

const ModalDesc = ({ title, contributors }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        color={`accent`}
        cursor={`pointer`}
        onClick={onOpen}
        fontWeight={`bold`}
        fontSize={{ base: `xs`, sm: `sm`, md: `md` }}
      >
        View Details
      </Text>

      <Modal
        isCentered={true}
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          color={colorMode == `dark` ? `darkBg` : `lightBg`}
          bg={colorMode == `light` ? `darkBg` : `lightBg`}
          m={`1.5em`}
        >
          <ModalHeader textTransform={`capitalize`} className='font-sans'>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={10}>
            <ProjectDesc
              inModal={true}
              contributors={contributors}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDesc;
