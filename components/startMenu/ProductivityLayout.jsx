import {
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CTA from '../drawer/CTA';

const ProductivityLayout = ({ title, document }) => {
  let boxs = document.map((box) => {
    return (
      <CTA
        name={box.name}
        height={{ base: `7rem`, sm: `9rem` }}
        key={box.id}
        title={title}
      >
        <Image
          filter={`drop-shadow(1px 8px 5px #00000080)`}
          boxSize={`40.5%`}
          src={box.image}
          alt='language'
        />
      </CTA>
    );
  });
  return (
    <>
      <Text
        textAlign={`right`}
        mt={10}
        mb={2}
        className='heading accent'
        fontWeight={700}
      >
        {title}
      </Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={3}>
        {boxs}
      </Grid>
    </>
  );
};

export default ProductivityLayout;
