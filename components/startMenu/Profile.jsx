import {
  Avatar,
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Container textAlign={`center`} p={0}>
      <Avatar
        w={`10rem`}
        h={`10rem`}
        size={`2xl`}
        name='Kingsley Solomon'
        background={`#595959`}
        src=''
      />
      <Box my={`1rem`}>
        <Heading as={`h1`} size={`md`}>
          KINGSLEY I SOLOMON
        </Heading>
        <Text>kinxly@gmail.com</Text>
        <Text>Frontend Developer</Text>
      </Box>
    </Container>
  );
};

export default Profile;
