import {
  Box,
  Container,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ProductivityLayout from '../startMenu/ProductivityLayout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import {
  programming_languages,
  libraries_framework,
  tools_platform,
} from '../../public/tools';

const ProductivityCarousel = () => {
  return (
    <Carousel
      renderIndicator={false}
      infiniteLoop
      showThumbs={false}
    >
      <Box>
        <ProductivityLayout
          title={`Languages`}
          document={programming_languages}
        />
      </Box>
      <Box>
        <ProductivityLayout
          title={`Libraries & Frameworks`}
          document={libraries_framework}
        />
      </Box>
      <Box>
        <ProductivityLayout
          title={`Tools & Platforms`}
          document={tools_platform}
        />
      </Box>
    </Carousel>
  );
};

export default ProductivityCarousel;
