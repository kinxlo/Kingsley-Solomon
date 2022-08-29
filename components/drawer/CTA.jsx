import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { Box } from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext.js';

const CTA = ({
  width,
  height,
  name,
  title,
  bgColor,
  children,
}) => {
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
      case `next`:
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
      className='hoverState'
      textAlign={`center`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`space-evenly`}
      alignItems={`center`}
      width={width}
      height={height}
      background={bgColor}
      // padding={`2rem`}
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
