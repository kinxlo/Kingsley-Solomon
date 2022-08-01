import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ProjectBox = () => {
  return (
    <Box
      filter={`drop-shadow(1px 1px 2px #010101)`}
      display={`flex`}
      justifyContent={`end`}
      width={`100%`}
      height={`10rem`}
      marginY={`1rem`}
      gap={3}
      borderRadius={`3px`}
      overflow={`hidden`}
      background={`#59595950`}
    >
      <Image
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1659314864/portfolio/shot6_gqos9r.png`}
        alt='project'
      />
    </Box>
  );
};

export default ProjectBox;
