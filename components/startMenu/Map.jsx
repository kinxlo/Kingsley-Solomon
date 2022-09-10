import { Box, Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import mapTwo from '../../public/mapTwo.webp';

const Map = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      //   border={`1px solid red`}
      backgroundColor={`lightBg`}
      marginLeft={`auto`}
      height={`100vh`}
    >
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
  );
};

export default Map;
