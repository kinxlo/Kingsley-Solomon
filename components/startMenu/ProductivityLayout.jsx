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
        bgColor={`#ffffff10`}
      >
        <Image
          border={`1px solid red`}
          filter={`drop-shadow(1px 8px 5px #00000080)`}
          maxW={`30%`}
          src={box.image}
          alt='language'
        />
      </CTA>
    );
  });
  return (
    <Flex
      maxW={`1200px`}
      margin={`0 auto`}
      flexDir={`column`}
      justifyContent={`center`}
      py={`5rem`}
    >
      <Flex
        display={`flex`}
        justifyContent={`end`}
        alignItems={`center`}
        marginY={`3rem`}
      >
        <hr className='line' />

        <Text
          fontSize={{ base: `1.5rem`, md: `3rem` }}
          fontWeight={700}
          width={`fit-content`}
        >
          {title}
        </Text>
      </Flex>
      <Container maxW={`900px`} margin={`0 0 0 auto`} p={0}>
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
          {boxs}
        </Grid>
      </Container>
    </Flex>
  );
};

export default ProductivityLayout;
