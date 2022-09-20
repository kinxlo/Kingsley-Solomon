import {
  Box,
  Center,
  Grid,
  Image,
  Text,
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

const ProductivityLayout = ({
  title,
  tools,
  languages,
}) => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);
  const box = useRef(null);

  const spin = (e) => {
    e.target.classList.add(`spin`);
    e.target.addEventListener(`animationend`, () => {
      e.target.classList.remove(`spin`);
    });
  };

  let language = languages.map((box) => {
    return (
      <CTA
        name={box.name}
        height={{
          base: `10rem`,
          sm: `12rem`,
          md: `15rem`,
          xl: `13rem`,
        }}
        key={box.id}
        title={title}
      >
        <Image
          onMouseEnter={spin}
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
  let tool = tools.map((box) => {
    return (
      <CTA
        name={box.name}
        height={{
          base: `10rem`,
          sm: `12rem`,
          md: `15rem`,
          xl: `13rem`,
        }}
        key={box.id}
        title={title}
      >
        <Image
          onMouseEnter={spin}
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
        // border={`1px solid red`}
        ref={box}
        maxW={{ base: `100%`, lg: `60%`, xl: `50%` }}
        height={`fit-content`}
        className='hide-scrollbar!'
      >
        <Grid
          p={1}
          width={`100%`}
          className='section hide-scrollbar!'
          name={title}
          templateColumns='repeat(3, 1fr)'
          gap={1}
        >
          {language}
        </Grid>
        <Center
          gap={3}
          textAlign={`center`}
          flexDir={`column`}
          p={5}
        >
          <Text
            opacity={0.7}
            px={2}
            borderRadius={`5px`}
            fontWeight={`bold`}
            fontSize={{
              base: `10px`,
              lg: `12px`,
            }}
          >
            Languages & Frameworks
          </Text>
          <Text
            fontSize={{
              base: `lg`,
              sm: `xl`,
              lg: `2xl`,
              '2xl': `3xl`,
            }}
            className={`font-display`}
          >
            
            Area of Focus
          </Text>
          <Text
            opacity={0.7}
            px={2}
            borderRadius={`5px`}
            fontWeight={`bold`}
            fontSize={{
              base: `10px`,
              lg: `12px`,
            }}
          >
            Tools & platforms
          </Text>
        </Center>
        <Grid
          p={1}
          width={`100%`}
          className='section hide-scrollbar!'
          name={title}
          templateColumns='repeat(3, 1fr)'
          gap={1}
        >
          {tool}
        </Grid>
      </Box>
    </>
  );
};

export default ProductivityLayout;
