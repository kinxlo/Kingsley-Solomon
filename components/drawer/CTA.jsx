import React, { useContext } from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext.js';

const CTA = ({ width, height, name, title, children }) => {
  const { colorMode } = useColorMode();
  const { showProjects, showMapOrNotice } =
    useContext(AppContext);

  const handleFunctionClick = (e) => {
    e.stopPropagation();
    functions(e.currentTarget.innerText.toLowerCase());
  };

  const functions = (name) => {
    switch (name) {
      case `fullscreen`:
        // return;
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
      case `html`:
        showProjects(name);
        break;
      case `css`:
        showProjects(name);
        break;
      case `scss`:
        showProjects(name);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      backgroundColor={
        colorMode == `light` ? `#DCDCDC50` : `#DCDCDC10`
      }
      textAlign={`center`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={width}
      height={height}
      onClick={handleFunctionClick}
      _hover={{ bg: `transparent` }}
      transition={`ease all .2s`}
      className={`pbox`}
    >
      {/* <section> */}
      {children}
      {title === `Contacts` ? null : (
        <Text
          letterSpacing={`2px`}
          fontWeight={`400`}
          className='font-sans'
        >
          {name}
        </Text>
      )}
      {/* </section> */}
    </Box>
  );
};

export default CTA;
