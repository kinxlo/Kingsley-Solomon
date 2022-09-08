import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Background = () => {
  const { colorMode } = useColorMode();

  const drop = {
    content: `''`,
    display: `block`,
    position: `absolute`,
    height: `15vh`,
    width: `100%`,
    top: `-50%`,
    left: 0,
    background: `${
      colorMode == `light`
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--darkBg) 75%,  var(--darkBg) 100%)`
        : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,  var(--lightBg) 75%,  var(--lightBg) 100%)`
    }`,
    animation: `drop 7s 0s infinite`,
    animationFillMode: `forwards`,
    animationTimingFunction: `cubic-bezier(0.4, 0.26, 0, 0.97)`,
    color: `${colorMode == `light` ? `darkBg` : `lightBg`}`,
    opacity: `${colorMode == `light` ? `10%` : `5%`}`,
  };
  return (
    <>
      <Box className='lines'>
        <Box className='line' _after={drop}></Box>
        <Box className='line' _after={drop}></Box>
        <Box className='line' _after={drop}></Box>
      </Box>
      <Box className='lines lines_two'>
        <Box className='line' _after={drop}></Box>
        <Box className='line' _after={drop}></Box>
        <Box className='line' _after={drop}></Box>
      </Box>
    </>
  );
};

export default Background;
