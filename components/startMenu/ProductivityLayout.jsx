import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import CTA from '../drawer/CTA';

const ProductivityLayout = ({ title, document }) => {
  const { colorMode } = useColorMode();

  const bgText = {
    content: `'Interests'`,
    position: `fixed`,
    bottom: `-20rem`,
    left: 0,
    fontSize: `40rem`,
    fontWeight: `bolder`,
    fontFamily: `var(--font-serif)`,
    letterSpacing: `1rem`,
    color: `${colorMode == `light` ? `darkBg` : `lightBg`}`,
    opacity: `${colorMode == `light` ? `5%` : `3%`}`,
  };

  let boxs = document.map((box) => {
    return (
      <CTA
        name={box.name}
        height={{ base: `10rem`, sm: `14rem`, md: `15rem` }}
        key={box.id}
        title={title}
      >
        <Image
          as={`img`}
          filter={
            colorMode == `light`
              ? `drop-shadow(-4px 2px 2px #A7A7A7)`
              : null
          }
          maxW={{ base: `25%`, md: `20%` }}
          src={box.image}
          alt='language'
        />
      </CTA>
    );
  });
  return (
    <Box _before={bgText} height={`fit-content`}>
      <Grid
        maxW={{ base: `100%`, lg: `50%` }}
        width={`100%`}
        className='section'
        name={title}
        templateColumns='repeat(3, 1fr)'
        gap={1}
      >
        {boxs}
      </Grid>
    </Box>
  );
};

export default ProductivityLayout;
