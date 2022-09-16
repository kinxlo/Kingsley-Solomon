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
} from '@chakra-ui/react';
import React from 'react';
import ProjectDesc from './ProjectDesc';

const ModalDesc = ({ contributors }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        color={`accent`}
        cursor={`pointer`}
        onClick={onOpen}
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
        <ModalContent m={`1.5em`}>
          <ModalHeader>Modal Title</ModalHeader>
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