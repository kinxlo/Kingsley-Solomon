import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import {
  FcAddressBook,
  FcBriefcase,
} from 'react-icons/fc';

const Profile = () => {
  return (
    <Container p={3}>
      <Avatar
        w={`10rem`}
        h={`10rem`}
        border={`1px solid #ffffff18`}
        overflow={`hidden`}
      >
        <Avatar
          // filter={`drop-shadow(1px 0px 5px #010101)`}
          className='cc-overlay'
          w={`10rem`}
          h={`10rem`}
          size={`2xl`}
          name='Kingsley Solomon'
          background={`#595959`}
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile0_dqiv0d.jpg'
        />
      </Avatar>
      <Box my={`1rem`}>
        <Heading as={`h1`} size={`md`}>
          KINGSLEY I SOLOMON
        </Heading>
        <Box>
          {/* <Flex alignItems={`center`}>
            <Icon mr={1} as={FcAddressBook} />{' '}
            <span className='accent'>kinxly@gmail.com</span>
          </Flex> */}
          <Flex alignItems={`center`}>
            <Icon mr={1} as={FcBriefcase} />
            <span className='accent'>
              Frontend Developer
            </span>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
