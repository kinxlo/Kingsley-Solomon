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
import languages from '../../public/language';
import tools from '../../public/tools';

const ProductivityCarousel = () => {
  return (
    <Carousel renderIndicator={false} infiniteLoop showThumbs={false}>
      <Box>
        <ProductivityLayout
          title={`Programming Languages`}
          document={languages}
        />
      </Box>
      <Box>
        <ProductivityLayout
          title={`Programming Languages`}
          document={tools}
        />
      </Box>
      <Box>
        <ProductivityLayout
          title={`Programming Languages`}
          document={languages}
        />
      </Box>
    </Carousel>
  );
};

export default ProductivityCarousel;
