import { Grid, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import CTA from '../drawer/CTA';

const ProductivityLayout = ({ title, document }) => {
  let boxs = document.map((box) => {
    return (
      <CTA
        name={box.name}
        height={`9rem`}
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
      <Heading pb={3} fontSize={`24px`}>
        {title}
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={1} mb={3}>
        {boxs}
      </Grid>
    </>
  );
};

export default ProductivityLayout;
4;
