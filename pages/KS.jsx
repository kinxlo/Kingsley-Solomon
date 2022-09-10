import {
  Box,
  Button,
  Icon,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
// import Image from 'next/image'
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import ProjectBox from '../components/drawer/ProjectBox';
import Nav from '../components/startMenu/Nav';
import { AppContext } from '../context/AppContext';
import Profile from '../components/startMenu/Profile';
import DigitalResume from '../components/resume/DigitalResume';
import Hero from '../components/startMenu/Hero';
import ContactMenu from '../components/startMenu/ContactMenu';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';
import ProjectScreen from '../components/startMenu/ProjectScreen';

import { tools } from '../public/tools';

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import Map from '../components/startMenu/Map';

const MobileLayout = () => {
  const { switchView } = useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const image = (
    <Box
      display={switchView !== `profile` ? `none` : `block`}
      bg={`overlayProfile`}
      height={`100%`}
    >
      <Image
        loading='eager'
        width={`100%`}
        height={`100%`}
        objectFit={`cover`}
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/w_500,f_auto,q_auto/v1630322773/portfolio/profile0_dqiv0d.jpg`}
        alt={`profile-pic`}
        mixBlendMode={`multiply`}
        filter={`grayscale(50%)  brightness(0.4)`}
      />
    </Box>
  );

  const display = () => {
    switch (switchView) {
      case `profile`:
        return <Profile />;
      case `resume`:
        return <DigitalResume />;
      case `projects`:
        return <ProjectBox />;
      case `tools`:
        return (
          <ProductivityLayout
            title={`Languages`}
            document={tools}
          />
        );
      default:
        return <Profile />;
    }
  };

  const screen = () => {
    switch (switchView) {
      case `profile`:
        return image;
      case `resume`:
        return image;
      case `projects`:
        return <ProjectScreen />;
      case `tools`:
        return <Map />;
      default:
        return image;
    }
  };

  return (
    // !isLoading &&
    <>
      <Nav />
      <ContactMenu />
      <Button
        borderRadius={`100%`}
        boxSize={`3em`}
        backgroundColor={`rgba(0,0,0,0.5)`}
        color={`lightBg`}
        pos={`fixed`}
        top={`3em`}
        zIndex={999}
        right={`1em`}
        onClick={toggleColorMode}
      >
        <Icon
          as={
            colorMode == `light`
              ? RiMoonClearFill
              : RiSunFill
          }
          fontSize={`1.3rem`}
        />
      </Button>
      {display()}
      <Hero>{screen()}</Hero>
    </>
  );
};

export default MobileLayout;
