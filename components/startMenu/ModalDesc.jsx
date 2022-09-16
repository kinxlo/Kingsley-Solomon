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

const ModalDesc = () => {
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
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectDesc inModal={true} />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant='ghost'>
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDesc;
