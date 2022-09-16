import {
  Box,
  Grid,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import React, {
  useContext,
  useEffect,
  useRef,
} from 'react';
import { AppContext } from '../../context/AppContext';
import CTA from '../drawer/CTA';
import { productivity } from '../../gsap';

const ProductivityLayout = ({ title, document }) => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);
  const box = useRef(null);

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

  useEffect(() => {
    productivity();
  }, []);

  return (
    <>
      <Box
        onMouseEnter={productivity}
        ref={box}
        height={`fit-content`}
        className='hide-scrollbar!'
      >
        <Grid
          p={1}
          maxW={{ base: `100%`, lg: `60%`, xl: `50%` }}
          width={`100%`}
          className='section hide-scrollbar!'
          name={title}
          templateColumns='repeat(3, 1fr)'
          gap={1}
        >
          {boxs}
        </Grid>
      </Box>
    </>
  );
};

export default ProductivityLayout;
