import {
  Box,
  Button,
  Icon,
  Image,
  useColorMode,
} from '@chakra-ui/react';

import React, { useContext, useEffect } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';
import Nav from '../components/startMenu/Nav';
import { AppContext } from '../context/AppContext';
import Profile from '../components/startMenu/Profile';
import DigitalResume from '../components/resume/DigitalResume';
import Hero from '../components/startMenu/Hero';
import ContactMenu from '../components/startMenu/ContactMenu';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';
import ProjectScreen from '../components/startMenu/ProjectScreen';
// import { profileAnimation } from '../gsap';
import { tools } from '../public/tools';

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import Map from '../components/startMenu/Map';

const MobileLayout = () => {
  const { switchView } = useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const image = (
    <Box
      display={
        switchView !== `profile` && switchView !== `resume`
          ? `none`
          : `block`
      }
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
      // case `resume`:
      //   return <DigitalResume />;
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

  // useEffect(() => {
  //   profileAnimation();
  // }, []);

  return (
    // !isLoading &&
    <>
      {/* <div className='cursor'></div> */}
      <Nav />
      <ContactMenu />
      <Button
        borderRadius={`100%`}
        boxSize={`3em`}
        backgroundColor={`rgba(0,0,0,0.5)`}
        color={`lightBg`}
        pos={`fixed`}
        top={`1.5em`}
        zIndex={999}
        right={`1.5em`}
        onClick={toggleColorMode}
        className={`action-btn`}
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
      <Box
        display={{ base: `none`, lg: `block` }}
        id='profileBox'
        width={`100vw`}
        height={`100vh`}
        zIndex={500}
        pos={`fixed`}
        top={0}
        left={{ lg: `60%`, xl: `50%` }}
        bg={colorMode == `light` ? `lightBg` : `darkBg`}
      ></Box>
      {display()}
      <Hero>{screen()}</Hero>
    </>
  );
};

export default MobileLayout;
