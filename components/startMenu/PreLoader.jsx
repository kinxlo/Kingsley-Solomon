// import { Image } from '@chakra-ui/react';
import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
// import loader from '../../assets/loader.svg';

const PreLoader = () => {
  return (
    <Flex
      alignItems={`center`}
      justifyContent={`center`}
    //   border={`2px solid red`}
      w={`100%`}
      h={`100vh`}
    >
      <Image
      boxSize={`7rem`}
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1663411110/portfolio/Ball-1s-200px_1_ltp8ll.gif`}
        alt={`loader`}
      />
    </Flex>
  );
};

export default PreLoader;
