import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

const ProjectDesc = ({
  contributors,
  packages,
  inModal,
}) => {
  return (
    <Flex flexDir={`column`} gap={5} mt={5}>
      <Flex
        flexDir={{ base: `column`, lg: `row` }}
        gap={10}
      >
        {/* about */}
        <Box flex={`1`}>
          <Text
            mb={1}
            fontSize={`sm`}
            fontWeight={`bold`}
            className={`font-sans`}
          >
            About
          </Text>
          <Text fontSize={{ base: `xs` }}>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio animi earum quidem
            maiores. Nemo sit rem nesciunt suscipit eligendi
            tenetur beatae recusandae libero temporibus
          </Text>
        </Box>

        {/* release */}
        <Box flex={`1`}>
          <Text
            mb={1}
            fontSize={`sm`}
            fontWeight={`bold`}
            className={`font-sans`}
          >
            Release
          </Text>
          <>
            <Text
              className='font-mono'
              fontSize={{ base: `xs` }}
            >
              12-5-2020 12:00
            </Text>
            <Text fontSize={{ base: `xs` }}>V 2.0.0</Text>
          </>
        </Box>
      </Flex>
      <Flex
        flexDir={{ base: `column`, lg: `row` }}
        gap={10}
      >
        {/* package */}
        <Box flex={`1`}>
          <Text
            mb={1}
            fontSize={`sm`}
            fontWeight={`bold`}
            className={`font-sans`}
          >
            Tools and Packages
          </Text>
          <Flex gap={3}>
            {packages ? (
              packages.map((tools, index) => {
                return (
                  <Box key={index}>
                    <Image src='' alt='img' />
                  </Box>
                );
              })
            ) : (
              <Text>N/A</Text>
            )}
          </Flex>
        </Box>
        {/* contributors */}
        <Box flex={`1`}>
          <Text
            mb={1}
            fontSize={`sm`}
            fontWeight={`bold`}
            className={`font-sans`}
            // color={`blue`}
          >
            Contributors
          </Text>
          <AvatarGroup size='md' max={2}>
            {contributors ? (
              contributors.map((dev) => {
                return (
                  <Avatar
                    key={dev.name}
                    name={dev.name}
                    src={dev.img}
                  />
                );
              })
            ) : (
              <Text>...</Text>
            )}
          </AvatarGroup>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProjectDesc;
