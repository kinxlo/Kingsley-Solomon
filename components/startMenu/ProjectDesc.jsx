import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ProjectDesc = ({ projectInfo, inModal }) => {
  return (
    <Grid
      templateColumns={
        inModal ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'
      }
      gap={5}
      mt={5}
    >
      <Flex
        flexDir={`column`}
        justifyContent={`space-between`}
        flex={1}
        gap={10}
      >
        {/* package */}
        <Box>
          <Text
            mb={2}
            fontSize={`lg`}
            fontWeight={`bold`}
            className={`font-sans`}
            color={`accent`}
          >
            Tools and Packages
          </Text>
          <Flex gap={3}>
            <Box>
              <Image
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1661784165/portfolio/ICONS8_1_j5h5hz.png`}
                alt='img'
              />
            </Box>
            <Box>
              <Image
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1661784165/portfolio/ICONS8_1_j5h5hz.png`}
                alt='img'
              />
            </Box>
            <Box>
              <Image
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1661784165/portfolio/ICONS8_1_j5h5hz.png`}
                alt='img'
              />
            </Box>
          </Flex>
        </Box>
        {/* release */}
        <Box>
          <Text
            fontSize={`lg`}
            fontWeight={`bold`}
            className={`font-sans`}
            color={`accent`}
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
        flexDir={`column`}
        justifyContent={`space-between`}
        flex={1}
        gap={10}
      >
        {/* about */}
        <Box>
          <Text
            fontSize={`lg`}
            fontWeight={`bold`}
            className={`font-sans`}
            color={`accent`}
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

        {/* contributors */}
        <Box>
          <Text
            mb={2}
            fontSize={`lg`}
            fontWeight={`bold`}
            className={`font-sans`}
            color={`accent`}
          >
            Contributors
          </Text>
          <AvatarGroup size='sm' max={2}>
            <Avatar
              name='Ryan Florence'
              src='https://bit.ly/ryan-florence'
            />
            <Avatar
              name='Segun Adebayo'
              src='https://bit.ly/sage-adebayo'
            />
            <Avatar
              name='Kent Dodds'
              src='https://bit.ly/kent-c-dodds'
            />
            <Avatar
              name='Prosper Otemuyiwa'
              src='https://bit.ly/prosper-baba'
            />
            <Avatar
              name='Christian Nwamba'
              src='https://bit.ly/code-beast'
            />
          </AvatarGroup>
        </Box>
      </Flex>
    </Grid>
  );
};

export default ProjectDesc;
