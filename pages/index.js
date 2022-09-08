import {
  Box,
  Button,
  Icon,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
// import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';
import Nav from '../components/startMenu/Nav'
import { AppContext } from '../context/AppContext';
import Profile from '../components/startMenu/Profile';
import DigitalResume from '../components/resume/DigitalResume';
import Hero from '../components/startMenu/Hero'
import ContactMenu from '../components/startMenu/ContactMenu';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';

import {
  tools
} from '../public/tools';

import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const MobileLayout = () => {
  const { switchView } =
    useContext(AppContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLoading, setLoading] = useState(true)


  const image =
    <Box display={switchView !== `profile` ? `none` : `block`} bg={`accent`} height={`100%`}>
      <Image
        width={`100%`}
        height={`100%`}
        objectFit={`cover`}
        src={`https://res.cloudinary.com/kingsleysolomon/image/upload/w_500,f_auto,q_auto/v1630322773/hng/profile0_dqiv0d.jpg`}
        alt={`profile-pic`}
        mixBlendMode={`darken`}
        filter={`grayscale(50%)  brightness(0.4)`}

      />
    </Box>


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

  const screen = () => {
    switch (switchView) {
      case `profile`:
        return image;
      case `resume`:
        return image;
      case `projects`:
        return null;
      case `tools`:
        return null
      default:
        return image;
    }
  };

  useEffect(() => {
    window.addEventListener("load", function (event) {
      setLoading(false)
    });
  }, [])


  if (isLoading) {
    return <Text fontSize={`10rem`}>Loading...</Text>
  }

  return (
    !isLoading && <>
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
        {screen()}
      </Hero>
    </>
  );
};

export default MobileLayout;


