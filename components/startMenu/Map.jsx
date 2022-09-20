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
      <Box
        id='map'
        onClick={onToggle}
        position={`relative`}
        backgroundColor={`lightBg`}
        marginLeft={`auto`}
        height={`100vh`}
      >
        <Flex
          width={`50%`}
          gap={2}
          alignItems={`start`}
          borderRadius={`10px`}
          pos={`absolute`}
          top={0}
          zIndex={1}
          m={`1.5em`}
          p={`1em`}
          backgroundColor={
            colorMode == `light`
              ? `transparent`
              : `#80000050`
          }
        >
          <Image
            alt='img'
            src='https://img.icons8.com/officel/25/000000/address.png'
          />
          <Text
            color={
              colorMode == `light` ? `darkBg` : `lightBg`
            }
            textTransform={`capitalize`}
          >
            No 10, tunde yaya street, iselewu orelope,
            igbogbo, ikorodu, lagos state nigeria
          </Text>
        </Flex>

        <Image
          height={`100%`}
          objectFit={`cover`}
          src={
            colorMode == `light`
              ? `https://res.cloudinary.com/kingsleysolomon/image/upload/v1662808879/portfolio/map_dnya7l.webp`
              : `https://res.cloudinary.com/kingsleysolomon/image/upload/v1662800550/portfolio/map_1_jffuub.webp`
          }
          alt='map'
          mixBlendMode={`multiply`}
        />
      </Box>
    </>
  );
};

export default Map;
