import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Map = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        bg={colorMode == `light` ? `lightBg` : `darkBg`}
        alignItems={`start`}
        justifyContent={`center`}
        id='map'
        onClick={onToggle}
        position={`relative`}
        flexDir={`column`}
        marginLeft={`auto`}
        height={`100vh`}
      >
        <Flex
          gap={2}
          alignItems={`center`}
          pos={`absolute`}
          top={0}
          zIndex={1}
          m={`1.5em`}
        >
          <Image
            alt='img'
            src='https://img.icons8.com/officel/25/000000/address.png'
          />
          <Text
            className='font-display'
            letterSpacing={`1px`}
            // opacity={0.7}
            color={
              colorMode == `light` ? `darkBg` : `lightBg`
            }
            textTransform={`capitalize`}
          >
            Somewhere on Earth
          </Text>
        </Flex>

        <Box pos={`relative`}>
          <Image
            objectFit={`cover`}
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1663635679/portfolio/pngegg_15_fula8u.png`}
            alt='map'
          ></Image>
          <Box
            pos={`absolute`}
            top={`58%`}
            left={`50%`}
            className='marker'
          ></Box>
        </Box>
        <Link
          target={`_blank`}
          textDecor={`none !important`}
          m={`1.5em`}
          href='https://wa.me/08100792853'
        >
          <Flex alignItems={`start`} gap={2}>
            <Image
              alt='img'
              src='https://img.icons8.com/officel/20/000000/whatsapp.png'
            />
            <Text
              // bg={`#00000010`}
              color={
                colorMode == `light` ? `darkbg` : `lightBg`
              }
              px={2}
              borderRadius={`5px`}
              fontStyle={`italic`}
              fontWeight={`bold`}
              fontSize={{ base: `10px`, sm: `12px` }}
              _hover={{ color: `matrixDark` }}
            >
              Have any questions?, want to talk codes? or
              just feel like collaborating...I&apos;m your
              guy.
            </Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
};

export default Map;
