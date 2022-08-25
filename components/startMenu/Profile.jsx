import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DrawerExample from '../drawer/Drawer';
import Search from '../searchBar/Search';

const Profile = () => {
  const [displayApi, setDisplayApi] = useState(null);

  const checkWindowSize = () => {
    if (window.innerWidth <= 520) {
      setDisplayApi(
        <>
          <Search />
          <DrawerExample />
        </>
      );
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, []);

  return (
    <Flex
      position={`relative`}
      flexDir={`column`}
      justifyContent={`space-evenly`}
      p={0}
      height={`100%`}
    >
      <Heading
        fontSize={`24px`}
        letterSpacing={1}
        className='accent'
      >
        Kingsley Solomon
      </Heading>
      <Box>
        <Text
          className='accent'
          as={`h2`}
          fontSize={`3.3rem`}
          lineHeight={1.2}
          fontWeight={700}
        >
          Frontend <br /> Developer.
        </Text>
        <Text mt={5} fontSize={`16px`}>
          I like to craft solid and scalable frontend
          products with great user experiences.
        </Text>
      </Box>
      <Flex gap={5} fontSize={{ base: `10px`, md: `12px` }}>
        <Text flex={1}>
          Highly skilled at progressive enhancement, design
          systems & UI Engineering.
        </Text>
        <Text flex={1}>
          Over 5 of experience building products for
          clients.
        </Text>
      </Flex>
      <Flex
        gap={10}
        position={`absolute`}
        bottom={0}
        left={0}
      >
        {displayApi}
      </Flex>
    </Flex>
  );
};

export default Profile;
