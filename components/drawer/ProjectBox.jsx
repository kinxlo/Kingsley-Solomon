import React, { Suspense, useContext } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import {
  darkSticker,
  lightSticker,
} from '../../theme/customTheme';
import FullScrollView from '../carousel/FullScrollView';
import PreLoader from '../startMenu/PreLoader';

const ProjectScreen = dynamic(
  () => import('../startMenu/ProjectScreen'),
  {
    suspense: true,
  }
);

const ProjectBox = () => {
  const { colorMode } = useColorMode();
  const {
    projects,
    language,
    handleMouseEnter,
    handleMouseLeave,
    botMessage,
    projectInfo,
  } = useContext(AppContext);

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Box
          // border={`1px solid green`}
          p={{ base: `2em`, md: `10em`, lg: `1.5em` }}
          className='section'
          title={project.name}
          key={project.id}
          flexDir={`column`}
          justifyContent={`space-evenly !important`}
        >
          <Box
            transform={{
              base: `scale(0.8)`,
              lg: `scale(1)`,
            }}
          >
            <Text
              display={{ base: `block`, xl: `none` }}
              color={`accent`}
              className='font-mono'
              textTransform={`capitalize`}
              fontWeight={`bold`}
              fontSize={{
                base: `xl`,
                md: `2xl`,
                xl: `2rem`,
              }}
              textAlign={{ base: `center`, xl: `left` }}
              my={2}
            >
              {projectInfo.name}
            </Text>
            <Box
              display={`flex`}
              pos={`relative`}
              width={`100%`}
            >
              <Image
                filter={`drop-shadow(0 1px 3px #00000050)`}
                width={`100%`}
                height={`100%`}
                alt='img'
                src={project.imageDesktop}
              />
              <Box
                pos={`absolute`}
                bottom={0}
                left={`2rem`}
                width={`25%`}
              >
                <Image
                  width={`100%`}
                  height={`100%`}
                  alt='img'
                  src={project.imageMobile}
                />
              </Box>
            </Box>
          </Box>
          <Box display={{ lg: `none` }}>
            <ProjectScreen />
          </Box>
        </Box>
      );
    });
    return (
      <Box
        width={{ base: `initial`, lg: `60%`, xl: `50%` }}
      >
        <Box
          _before={
            colorMode == `light`
              ? lightSticker
              : darkSticker
          }
          _after={
            colorMode == `light`
              ? lightSticker
              : darkSticker
          }
          className='project-view'
          width={`fit-content`}
        >
          <Text
            className='font-serif'
            height={`fit-content`}
            pos={`fixed`}
            top={0}
            left={0}
            zIndex={100}
            textTransform={`capitalize`}
            fontWeight={700}
            transform={`translate(.5em, .5em)`}
            color={
              colorMode == `light` ? `darkBg` : `lightBg`
            }
            fontSize={{
              base: `20px`,
              sm: `26px`,
              md: `30px`,
              lg: `50px`,
            }}
          >
            {language} projects worth <br /> sharing.
          </Text>
        </Box>
        <Suspense fallback={<PreLoader />}>
          <FullScrollView>{projectList}</FullScrollView>
        </Suspense>
      </Box>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
