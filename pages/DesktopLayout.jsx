import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import NavigationBar from '../components/NavigationBar';
import { DiWindows } from 'react-icons/di';
import MapView from '../components/MapView';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DigitalResume from '../components/resume/DigitalResume';

const DesktopLayout = () => {
  const { toggleMapNotice, showResume } =
    useContext(AppContext);
  return (
    <>
      <NavigationBar />
      <Box
        className={`screen hide-scrollbar ${
          showResume ? `screen-overlay` : null
        }`}
        overflow={showResume ? `scroll` : `hidden`}
      >
        {toggleMapNotice.showBigMap && <MapView />}
        {showResume && <DigitalResume />}

        <Text
          display={`flex`}
          alignItems={`center`}
          as={`p`}
          color={`#fff`}
          pos={`fixed`}
          right={3}
          top={0}
          textTransform={`Capitalize`}
        >
          Inspired by Windows
          <Icon
            className='accent'
            as={DiWindows}
            fontSize={`2rem`}
            ml={`.3rem`}
          />
        </Text>
      </Box>
    </>
  );
};

export default DesktopLayout;
