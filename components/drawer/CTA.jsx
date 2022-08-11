import React, { useContext, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { activateFullscreen } from '../../public/functions.js';
import { AppContext } from '../../context/AppContext.js';

const CTA = ({ width, height, name, title, children }) => {
  const { showProjects, showMapOrNotice } =
    useContext(AppContext);

  const handleFunctionClick = (e) => {
    e.stopPropagation();
    functions(e.currentTarget.innerText.toLowerCase());
  };

  const functions = (name) => {
    switch (name) {
      case `fullscreen`:
        activateFullscreen(document.body);
        break;
      case `location`:
        showMapOrNotice('SHOW_MAP');
        break;
      case `notification`:
        showMapOrNotice('SHOW_NOTICE');
        break;
      case `react`:
        showProjects(name);
        break;
      case `javascript`:
        showProjects(name);
        break;
      case `vue`:
        showProjects(name);
        break;
      case `java`:
        showProjects(name);
        break;
      case `next`:
        showProjects(name);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      className='hoverState'
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
