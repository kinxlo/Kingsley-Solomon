import {
  Box,
  Button,
  Icon,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';
import Nav from '../components/startMenu/Nav'
import { AppContext } from '../context/AppContext';
import Profile from '../components/startMenu/Profile';
import DigitalResume from '../components/resume/DigitalResume';
import Hero from '../components/startMenu/Hero'
import ContactMenu from '../components/startMenu/ContactMenu';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';
import Reviews from '../components/drawer/Reviews.jsx'

import {
  tools
} from '../public/tools';
import {
  lightStickerFunc,
  darkStickerFunc
} from '../theme/customTheme';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const MobileLayout = () => {
  const { switchView, showControls, toggleControls, skillStickerName } =
    useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();


  const display = () => {
    switch (switchView) {
      case `profile`:
        return <Profile />;
      case `resume`:
        return <DigitalResume />;
      case `projects`:
        return <ProjectBox />;
      case `tools`:
        return <ProductivityLayout title={`Languages`}
          document={tools} />
      default:
        return <Profile />;
    }
  };

  return (
    <>
      {/* <Box pos={`fixed`} top={`3em`} zIndex={999} display={switchView == `profile` || switchView == `tools` ? `none` : `block`}>
        <Reviews />
      </Box> */}
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
      <Hero>
        <Image
          width={`100%`}
          height={`100%`}
          objectFit={`cover`}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile0_dqiv0d.jpg`}
          alt={`profile-pic`}
          mixBlendMode={`darken`}
          filter={`grayscale(50%)  brightness(0.4)`}
        />
      </Hero>
    </>
  );
};

export default MobileLayout;


