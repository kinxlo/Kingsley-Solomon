import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext.js';

const CTA = ({ width, height, name, title, children }) => {
  const { colorMode } = useColorMode();
  const { showProjects, showMapOrNotice } =
    useContext(AppContext);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener(
      'fullscreenchange',
      onFullscreenChange
    );

    return () =>
      document.removeEventListener(
        'fullscreenchange',
        onFullscreenChange
      );
  }, []);

  return (
    <Box
      boxShadow={`rgba(0, 0, 0, 0.2) 0px 30px 20px -7px`}
      border={
        colorMode == `light`
          ? `1px solid #00000010`
          : `1px solid #ffffff10`
      }
      bg={colorMode == `light` ? `darkBg` : `lightBg`}
      textAlign={`center`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={width}
      height={height}
      onClick={handleFunctionClick}
    >
      {/* <section> */}
      {children}
      {title === `Contacts` ? null : (
        <p className='font-mono'>{name}</p>
      )}
      {/* </section> */}
    </Box>
  );
};

export default CTA;
