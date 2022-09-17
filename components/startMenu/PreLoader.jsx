// import { Image } from '@chakra-ui/react';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
// import loader from '../../assets/loader.svg';

const PreLoader = () => {
  return (
    <Flex
      alignItems={`center`}
      justifyContent={`center`}
      border={`2px solid red`}
      w={`100%`}
      h={`100vh`}
    >
      <Image
        width={`10rem`}
        height={`10rem`}
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1663402007/portfolio/Double_Ring-1s-200px_gq3dn1.svg`}
        alt={`loader`}
      />
    </Flex>
  );
};

export default PreLoader;
