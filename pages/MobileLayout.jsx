import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';
import NavigationBar from '../components/NavigationBar';
import DigitalResume from '../components/resume/DigitalResume';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';
import Search from '../components/searchBar/Search';
import Profile from '../components/startMenu/Profile';
import StartControls from '../components/startMenu/StartControls';
import { AppContext } from '../context/AppContext';
import language from '../public/language';
import tools from '../public/tools';
import { AiOutlineMenu } from 'react-icons/ai';

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
        return (
          <>
            <ProductivityLayout
              title={`Languages & Frameworks`}
              document={language}
            />
            <ProductivityLayout
              title={`Tools`}
              document={tools}
            />
          </>
        );
      default:
        return <Profile />;
    }
  };
  return (
    <>
      <Box
        className='theme'
        display={`flex`}
        flexDir={`row`}
        border={`none !important`}
      >
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
          right={{ base: 5, md: `10rem` }}
          top={switchView == `tools` ? `25%` : 5}
          className={` line-h2`}
        >
          <Link
            fontSize={{ base: `8px`, md: `14px` }}
            letterSpacing={2}
            className='rotate-90'
          >
            kinxly@gmail.com
          </Link>
        </Flex>
        {showControls ? (
          <StartControls />
        ) : (
          <IconButton
            onClick={toggleControls}
            position={`fixed`}
            zIndex={999}
            right={5}
            bottom={5}
            backgroundColor={`#1ebed6`}
            // className='accent'
            aria-label='Call Sage'
            borderRadius={`100%`}
            fontSize='20px'
            icon={<AiOutlineMenu />}
          />
        )}
        <Container
          maxW={
            switchView === `tools` ? `1200px` : `1440px`
          }
          p={
            switchView === `projects` ||
            switchView === `resume`
              ? 0
              : `1rem`
          }
          display={`flex`}
          position={`relative`}
          flexDir={`column`}
          height={`100vh`}
          overflow={`auto`}
          className={`hide-scrollbar`}
        >
          {display()}
        </Container>
      </Box>
    </>
  );
};

export default MobileLayout;
