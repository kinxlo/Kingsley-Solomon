import React, { useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import {
  activateFullscreen,
  deactivateFullscreen,
} from '../../public/functions.js';

const CTA = ({
  width,
  height,
  // image,
  name,
  title,
  children,
}) => {
  const handleFunctionClick = (e) => {
    e.stopPropagation();
    functions(e.currentTarget.innerText);
  };

  const functions = (name) => {
    switch (name) {
      case `Fullscreen`:
        activateFullscreen(document.body);
        break;

      default:
        break;
    }
  };

  // useEffect(() => {
  //   document.body.requestFullscreen();
  // }, []);

  return (
    <Box
      className='hoverState'
      // border={`1px solid rgba(255, 255, 255, 0.18)`}
      textAlign={`center`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={width}
      height={height}
      background={`#595959`}
      onClick={handleFunctionClick}
    >
      {/* <section> */}
      {children}
      {title === `Contacts` ? null : <p>{name}</p>}
      {/* </section> */}
    </Box>
  );
};

export default CTA;
