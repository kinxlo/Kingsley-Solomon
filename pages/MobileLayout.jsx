import {
  Box,
  Container,
  Icon,
  IconButton,
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
        return (
          <>
            <Profile />
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
      case `resume`:
        return <DigitalResume />;
      case `projects`:
        return <ProjectBox />;
      case `search`:
        return <Search />;
      default:
        return (
          <>
            <Profile />
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
        {showControls ? (
          <StartControls />
        ) : (
          <IconButton
            onClick={toggleControls}
            position={`fixed`}
            zIndex={999}
            right={5}
            bottom={5}
            variant='outline'
            className='accent'
            aria-label='Call Sage'
            borderRadius={`100%`}
            fontSize='20px'
            icon={<AiOutlineMenu />}
          />
        )}
        <Container
          p={
            switchView === `projects` ||
            switchView === `resume`
              ? 0
              : `1rem`
          }
          //   borderLeft={`1px solid rgba(255, 255, 255, 0.18)`}
          borderLeft={
            switchView === `projects`
              ? `1px solid rgba(255, 255, 255, 0.18)`
              : `none`
          }
          display={`flex`}
          flexDir={`column`}
          //   height={`100%`}
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
