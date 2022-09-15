import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  darkSticker,
  lightSticker,
} from '../../theme/customTheme';
import FullScrollView from '../carousel/FullScrollView';
import ProjectScreen from '../startMenu/ProjectScreen';

const ProjectBox = () => {
  const { colorMode } = useColorMode();
  const {
    projects,
    language,
    handleMouseEnter,
    handleMouseLeave,
    botMessage,
  } = useContext(AppContext);

  const bgText = {
    content: `'"${
      botMessage ||
      'I Have nothing to say here...just read the resume.'
    }'`,
    width: `25rem`,
    padding: `.3rem .7rem`,
    position: `fixed`,
    top: { base: `initial` },
    right: { base: `iniital`, lg: `0` },
    bottom: { base: `15%`, sm: `10%`, md: `3%` },
    left: {
      base: `15%`,
      sm: `10%`,
      md: `17%`,
      xl: `50%`,
      '2xl': `58%`,
    },
    fontSize: { base: `8px`, sm: `10px`, md: `11px` },
    fontWeight: `medium`,
    fontFamily: `var(--font-mono)`,
    borderLeft: `3px solid red`,
    animation: `cursor .7s 3s linear infinite alternate`,
    color: `${
      colorMode == `light` ? `matrixDark` : `matrixLight`
    }`,
    zIndex: 1,
    // display: { base: `none`, sm: `block` },
  };
  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Flex
          // border={`1px solid green`}
          px={`1.5rem`}
          className='section'
          title={project.name}
          key={project.id}
          // gap={5}
          transform={{
            base: `scale(0.8)`,
            sm: `scale(0.9)`,
            md: `scale(0.7)`,
            lg: `scale(0.6)`,
            xl: `scale(1)`,
          }}
        >
          <Box
            mt={{
              md: `30rem`,
              lg: `initial`,
            }}
            transform={{
              base: `initial`,
              sm: `scale(0.8)`,
              xl: `initial`,
            }}
          >
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
          <Box
            transform={{
              base: `initial`,
              sm: `scale(0.9)`,
              md: `initial`,
            }}
            display={{ md: `none` }}
          >
            <ProjectScreen />
          </Box>
        </Flex>
      );
    });
    return (
      <Box
        _before={bgText}
        width={{ base: `initial`, xl: `50%` }}
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
            top={{ lg: `1.5rem`, xl: `initial` }}
            left={{
              base: `2%`,
              xl: `initial`,
            }}
            bottom={{ base: `initial`, xl: `10%` }}
            right={{
              base: `initial`,
              xl: `1%`,
            }}
            m={`1rem 1rem 3rem`}
            zIndex={100}
            textTransform={`capitalize`}
            fontWeight={700}
            textAlign={{
              base: `left`,
              xl: `right`,
            }}
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
            {language} <br />
            projects worth <br /> sharing.
          </Text>
        </Box>
        <FullScrollView>{projectList}</FullScrollView>
      </Box>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
