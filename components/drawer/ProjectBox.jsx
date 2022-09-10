import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { RiGithubLine } from 'react-icons/ri';
import { AiOutlineLink } from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';
import {
  darkSticker,
  lightSticker,
} from '../../theme/customTheme';
import FullScrollView from '../carousel/FullScrollView';

const ProjectBox = () => {
  const { projects, language } = useContext(AppContext);
  const { colorMode } = useColorMode();

  const bgText = {
    content: `'Accolades'`,
    position: `fixed`,
    bottom: `-20rem`,
    left: 0,
    fontSize: `40rem`,
    fontWeight: `bolder`,
    fontFamily: `var(--font-serif)`,
    letterSpacing: `1rem`,
    color: `${colorMode == `light` ? `darkBg` : `lightBg`}`,
    opacity: `${colorMode == `light` ? `5%` : `3%`}`,
    zIndex: -1,
  };

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Flex
          className='section'
          key={project.id}
          position={`relative`}
          transform={{
            base: `scale(1)`,
            md: `scale(0.7)`,
            lg: `scale(0.6)`,
            xl: `scale(1)`,
          }}
        >
          <Box
            display={`flex`}
            flexDir={`column`}
            gap={5}
            pos={`absolute`}
            width={`100%`}
            transformOrigin={`center`}
            p={`1.5em`}
          >
            <Image
              filter={`drop-shadow(0 1px 3px #00000050)`}
              width={`100%`}
              height={`100%`}
              alt='img'
              src={project.imageDesktop}
            />
            {/* mobile description */}
            <Box>
              <Text>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Porro inventore amet, nisi
                fuga itaque sint optio distinctio. Rem at
                cum sed voluptate incidunt eius nemo
                mollitia omnis, odio, voluptatum numquam.
              </Text>
            </Box>
          </Box>
          <Box
            pos={`absolute`}
            width={`50%`}
            transform={`scale(0.6) translate(3rem, -10em)`}
            transformOrigin={`center`}
            transition={`filter .3s ease-in`}
            _hover={{
              transform: `scale(0.6) translateY(3rem, -10em)`,
              filter: `opacity(0)`,
            }}
          >
            <Image
              width={`100%`}
              height={`100%`}
              alt='img'
              src={project.imageMobile}
            />
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
              base: `initial`,
              lg: `1%`,
              xl: `initial`,
            }}
            bottom={{ base: `8%`, xl: `10%` }}
            right={{
              base: `1rem`,
              lg: `initial`,
              xl: `1%`,
            }}
            m={`1rem 1rem 3rem`}
            zIndex={100}
            textTransform={`capitalize`}
            fontWeight={700}
            textAlign={{
              base: `right`,
              lg: `left`,
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
