import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import ProjectBox from '../components/drawer/ProjectBox';

import DigitalResume from '../components/resume/DigitalResume';
import Hero from '../components/startMenu/Hero';
import Search from '../components/searchBar/Search';
import Controls from '../components/Controls'
import Profile from '../components/startMenu/Profile';
import StartControls from '../components/startMenu/StartControls';
import { AppContext } from '../context/AppContext';

import { TbMenu } from 'react-icons/tb';
import FullScrollView from '../components/carousel/FullScrollView';
import ProductivityLayout from '../components/startMenu/ProductivityLayout';

import {
  programming_languages,
  libraries_framework,
  tools_platform,
} from '../public/tools';
import {
  lightStickerFunc,
  darkStickerFunc
} from '../theme/customTheme';

const MobileLayout = () => {
  const { switchView, showControls, toggleControls, skillStickerName } =
    useContext(AppContext);
  const { colorMode } = useColorMode();


  const skillsView =
    <Box _before={
      colorMode == `light` ? lightStickerFunc(skillStickerName) : darkStickerFunc(skillStickerName)
    }
      _after={
        colorMode == `light` ? lightStickerFunc(skillStickerName) : darkStickerFunc(skillStickerName)
      } className='section skills-view'>

      <FullScrollView>
        <ProductivityLayout
          title={`Languages`}
          document={programming_languages}
        />

        <ProductivityLayout
          title={`Libraries & Frameworks`}
          document={libraries_framework}
        />

        <ProductivityLayout
          title={`Tools & Platforms`}
          document={tools_platform}
        />

      </FullScrollView>;
    </Box>

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
        return skillsView
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
        className={`line-v2`}
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
          color={`accent!`}
          className={`blur`}
          borderRadius={`100%`}
          boxSize={`4rem`}
          transform={switchView == `profile` || switchView == `tools` ? `translate(50%, 0)` : `translate(0)`}
        >
          <Icon fontSize={`1.5rem`} as={TbMenu} />
        </Button>
      )}

      <Container
        margin={`0 auto 0 0`}
        maxW={`50%`}
        p={switchView == `tools` ? `1rem!` : 0}
        pl={{ base: showControls ? `3rem` : `initial`, lg: showControls ? 0 : `initial` }}
        className={`hide-scrollbar`}
      >
        {display()}
        {/* <Controls /> */}
      </Container>
      <Hero>
        <Image
          height={`100%`}
          objectFit={`cover`}
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg`}
          alt={`profile-pic`}
          mixBlendMode={`multiply`}
          filter={`grayscale(100%) saturate(0) brightness(0.5)`}
        />
      </Hero>
    </>
  );
};

export default MobileLayout;


