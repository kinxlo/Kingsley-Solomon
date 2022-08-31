import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';

import DigitalResume from '../components/resume/DigitalResume';
import Search from '../components/searchBar/Search';
import Profile from '../components/startMenu/Profile';
import StartControls from '../components/startMenu/StartControls';
import { AppContext } from '../context/AppContext';

import { TbMenu } from 'react-icons/tb';
import ProductivityCarousel from '../components/carousel/ProductivityCarousel';

const MobileLayout = () => {
  const { switchView, showControls, toggleControls } =
    useContext(AppContext);

  const display = () => {
    switch (switchView) {
      case `profile`:
        return <Profile />;
      case `resume`:
        return <DigitalResume />;
      case `projects`:
        return <ProjectBox />;
      case `search`:
        return <Search />;
      case `tools`:
        return <ProductivityCarousel />;
      default:
        return <Profile />;
    }
  };

  return (
    <>
      <Flex
        alignItems={`center`}
        justifyContent={`center`}
        pos={`fixed`}
        display={{
          base:
            switchView !== `profile` ? `none` : `initial`,
          '2xl': `initial`,
        }}
        fontSize={{ base: `12px`, md: `14px` }}
        right={5}
        top={switchView == `tools` ? `25%` : 5}
        className={` line-h2`}
      >
        <Link
          fontSize={{ base: `8px`, md: `14px` }}
          letterSpacing={2}
          className='rotate-90 font-mono'
        >
          kinxly@gmail.com
        </Link>
      </Flex>
      {showControls ? (
        <StartControls />
      ) : (
        <Button
          onClick={toggleControls}
          position={`fixed`}
          zIndex={999}
          right={switchView == `profile` || switchView == `tools` ? `50%` : 5}
          bottom={5}
          backgroundColor={`#ffffff50`}
          className={`accent blur`}
          borderRadius={`100%`}
          boxSize={`4rem`}
          transform={switchView == `profile` || switchView == `tools` ? `translate(50%, 0)` : `translate(0)`}
        >
          <Icon fontSize={`1.5rem`} as={TbMenu} />
        </Button>
      )}
      <Container
        p={switchView == `tools` ? `1rem!` : 0}
        pl={showControls ? `3rem!` : `initial`}
        maxW={`1440px`}
        className={`hide-scrollbar`}
      >
        {display()}
      </Container>
    </>
  );
};

export default MobileLayout;
