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
    <Container textAlign={`center`} p={3}>
      <Avatar
        // filter={`drop-shadow(1px 0px 5px #010101)`}
        w={`10rem`}
        h={`10rem`}
        size={`2xl`}
        name='Kingsley Solomon'
        background={`#595959`}
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile0_dqiv0d.jpg'
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
