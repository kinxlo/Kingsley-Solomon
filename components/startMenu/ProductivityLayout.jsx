import {
  Box,
  Container,
  Flex,
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
        height={{ base: `7rem`, sm: `9rem`, md: `15rem` }}
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
      <Flex
        display={`flex`}
        justifyContent={`end`}
        alignItems={`center`}
        // textAlign={`right`}
        mt={10}
        mb={2}
        // fontWeight={700}
      >
        <hr className='line' />

        <Text
          width={`fit-content`}
          className='heading accent'
        >
          {title}
        </Text>
        {/* <Box> */}
        {/* </Box> */}
      </Flex>
      <Container p={0} margin={`0 0 0 auto`} maxW={`900px`}>
        <Grid
          // margin={`0 auto`}
          templateColumns='repeat(3, 1fr)'
          gap={3}
        >
          {boxs}
        </Grid>
      </Container>
    </>
  );
};

export default ProductivityLayout;
