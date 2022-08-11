import { Icon, Image } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <span>
      <Image
        boxSize={`2rem`}
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1635445693/portfolio/1490_1_xpkgkq.gif`}
        alt='icon'
      />
    </span>
  );
};

export default Loader;
