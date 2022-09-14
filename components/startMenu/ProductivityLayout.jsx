import {
  Box,
  Grid,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CTA from '../drawer/CTA';

const ProductivityLayout = ({ title, document }) => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);

  const bgText = {
    content: `'"${
      botMessage ||
      'I Have nothing to say here...just read the resume.'
    }'`,
    width: `20rem`,
    padding: `.3rem .7rem`,
    position: { base: `absolute`, lg: `fixed` },
    bottom: `3.5%`,
    left: { base: `25%`, md: `63%`, xl: `53%` },
    fontSize: `.7em`,
    fontWeight: `medium`,
    fontFamily: `var(--font-mono)`,
    borderLeft: `3px solid red`,
    animation: `cursor .7s 3s linear infinite alternate`,
    color: `${
      colorMode == `light` ? `matrixDark` : `matrixLight`
    }`,
    zIndex: 1,
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
        p={1}
        maxW={{ base: `100%`, lg: `60%`, xl: `50%` }}
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
