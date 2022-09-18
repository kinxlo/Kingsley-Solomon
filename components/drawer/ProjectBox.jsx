import React, {
  Suspense,
  useContext,
  useEffect,
} from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import { projectAnimation } from '../../gsap';
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

  useEffect(() => {
    projectAnimation();
  }, []);

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
            <Box>
              <Text
                display={{ base: `block`, lg: `none` }}
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
              >
                {projectInfo.name}
              </Text>
              <Text
                display={{ base: `block`, lg: `none` }}
                color={`accent`}
                className='font-mono'
                textTransform={`capitalize`}
                fontWeight={`bold`}
                fontSize={{
                  base: `sm`,
                  md: `xl`,
                  // xl: `2rem`,
                }}
                textAlign={{ base: `center`, xl: `left` }}
              >
                {projectInfo.category}
              </Text>
            </Box>
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
          pos={`fixed`}
          top={`1.5em`}
          left={`1.5em`}
          zIndex={100}
          className='project-view'
          width={{ base: `80%`, lg: `40%` }}
        >
          <Text
            className='font-display slide-project'
            textTransform={`capitalize`}
            fontWeight={700}
            color={
              colorMode == `light` ? `darkBg` : `lightBg`
            }
            fontSize={{
              base: `3xl`,
              sm: ``,
              md: ``,
              lg: ``,
            }}
          >
            {language} projects
          </Text>
          <Text
            className='slide-project'
            fontSize={{
              base: `8px`,
              sm: `10px`,
              lg: `12px`,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Cum modi quas quod incidunt!
            Odio perferendis, earum assumenda vel suscipit
            nulla quaerat illo harum architecto minus
            accusantium quo, blanditiis officia atque.
          </Text>
        </Box>
        <Suspense fallback={<PreLoader />}>
          <Box id='project-image'>
            <FullScrollView>{projectList}</FullScrollView>
          </Box>
        </Suspense>
      </Box>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
