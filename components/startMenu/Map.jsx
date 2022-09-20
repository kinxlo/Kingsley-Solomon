import {
  Box,
  Flex,
  Image,
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
        alignItems={`center`}
        id='map'
        onClick={onToggle}
        position={`relative`}
        // backgroundColor={`lightBg`}
        marginLeft={`auto`}
        height={`100vh`}
      >
        <Flex
          width={`50%`}
          gap={2}
          alignItems={`center`}
          borderRadius={`10px`}
          pos={`absolute`}
          top={0}
          zIndex={1}
          m={`1.5em`}
          p={`1em`}
          // backgroundColor={
          //   colorMode == `light`
          //     ? `transparent`
          //     : `#80000050`
          // }
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
          {/* <Box
            pos={`absolute`}
            top={`202px`}
            left={`348px`}
            className='marker'
          ></Box> */}
        </Box>
      </Flex>
    </>
  );
};

export default Map;
