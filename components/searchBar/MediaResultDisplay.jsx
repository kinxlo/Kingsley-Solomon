import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ImageResultDisplay = ({ children }) => {
  return (
    <Box
      position={`relative`}
      filter={`drop-shadow(1px 1px 2px #010101)`}
      display={`flex`}
      justifyContent={`end`}
      width={`fit-content`}
      height={`7rem`}
      gap={3}
      borderRadius={`3px`}
      overflow={`hidden`}
      background={`#59595950`}
    >
      {children}
    </Box>
  );
};

export default ImageResultDisplay;
