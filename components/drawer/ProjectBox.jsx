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

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Flex
          className='section project_'
          key={project.id}
          position={`relative`}
          alignItems={`center`}
          backgroundImage={{
            base: project.image,
            lg: `none`,
          }}
          bgSize={`cover`}
          bgPosition={`right`}
          bgRepeat={`no-repeat`}
          _hover={{
            bgBlendMode: `normal`,
            filter: `grayscale(0)`,
          }}
        >
          <Box
            width={{ lg: `32rem`, '2xl': `50rem` }}
            height={{ lg: `20rem`, '2xl': `30rem` }}
            display={{ base: `none`, lg: `block` }}
            flexDir={`column`}
            justifyContent={`space-between`}
            transform={{
              base: `translateX(0)`,
              lg: `translateX(10rem)`,
            }}
            // bg={`accent`}
          >
            <Flex mb={3} justifyContent={`end`} gap={4}>
              {project.language.map(function (code, index) {
                return (
                  <Badge
                    fontSize={`10px`}
                    borderRadius={`10px`}
                    color={
                      colorMode == `light`
                        ? `accent`
                        : `lightBg`
                    }
                    p={`5px 20px`}
                    // border={`1px solid`}
                    letterSpacing={`1.5px`}
                    borderColor={`accent`}
                    bg={`transparent`}
                    className='font-mono'
                    key={index}
                  >
                    {code}
                  </Badge>
                );
              })}
            </Flex>
            <Box
              height={`calc(100% - 1em)`}
              className={`project_img_box`}
            >
              <Image
                className='project_img box-shadow'
                boxSize={`100%`}
                objectFit={``}
                src={project.image}
                alt=''
              />
            </Box>
          </Box>

          <Flex
            color={{ base: `#fff`, lg: `initial` }}
            position={{
              base: `relative`,
              lg: `absolute`,
            }}
            zIndex={2}
            left={{ xl: `5rem` }}
            textTransform={`capitalize`}
            flexDir={`column`}
            width={{ base: `100%`, lg: `initial` }}
            height={{ base: `100%`, lg: `initial` }}
            justifyContent={`center`}
            backdropFilter={{
              base: `blur(5px)`,
              lg: `none`,
            }}
            backgroundColor={{
              base: `rgba(0,0,0,0.8)`,
              lg: `initial`,
            }}
            _hover={{
              backdropFilter: `blur(0)`,
            }}
            p={`2em`}
          >
            <Text
              fontWeight={`medium`}
              color={
                colorMode == `light` ? `darkBg` : `accent`
              }
              fontSize={`14px`}
              className={`font-mono`}
            >
              {project.category}
            </Text>
            <Text
              className='font-serif'
              letterSpacing={`2px`}
              color={
                colorMode == `light` ? `accent` : `lightBg`
              }
              fontWeight={`bolder`}
              fontSize={`24px`}
            >
              {project.name}
            </Text>
            <Box
              my={5}
              p={5}
              borderRadius={10}
              bg={
                colorMode == `light`
                  ? `#10182090`
                  : `#80000050`
              }
              backdropFilter={`blur(10px)`}
              width={{ base: `100%`, lg: `30rem` }}
            >
              <Text
                textTransform={`capitalize`}
                color={`lightBg`}
                fontWeight={`medium`}
              >
                {project.desc}
              </Text>
            </Box>
            <Flex
              display={{ base: `flex`, lg: `none` }}
              justifyContent={`start`}
              flexWrap={`wrap`}
              mb={5}
              gap={4}
            >
              {project.language.map(function (code, index) {
                return (
                  <Text
                    color={
                      colorMode == `light`
                        ? `accent`
                        : `lightBg`
                    }
                    letterSpacing={`1.5px`}
                    className='font-mono'
                    key={index}
                  >
                    {code}
                  </Text>
                );
              })}
            </Flex>
            <Flex gap={3}>
              <Link
                _hover={{
                  color: `rgb(208, 0, 255) !important`,
                }}
                target={`_blank`}
                href={project.github}
              >
                <Icon
                  // border={`2px solid var(--mainLinkColor)`}
                  color={
                    colorMode == `light`
                      ? `accent`
                      : `lightBg`
                  }
                  borderRadius={`100%`}
                  fontSize={`1.5em`}
                  as={RiGithubLine}
                />
              </Link>
              <Link
                _hover={{
                  color: `rgb(208, 0, 255) !important`,
                }}
                target={`_blank`}
                href={project.url}
              >
                <Icon
                  // border={`2px solid var(--mainLinkColor)`}
                  color={
                    colorMode == `light`
                      ? `accent`
                      : `lightBg`
                  }
                  borderRadius={`100%`}
                  fontSize={`1.5em`}
                  as={AiOutlineLink}
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      );
    });
    return (
      <Box width={{ base: `initial`, xl: `50%` }}>
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
            pos={`fixed`}
            top={{ base: `-5rem`, xl: `initial` }}
            bottom={{ base: `iniial`, xl: `1em` }}
            right={`.3em`}
            m={`1rem 1rem 3rem`}
            opacity={{ base: `5%`, xl: `initial` }}
            textTransform={`capitalize`}
            fontWeight={700}
            textAlign={`right`}
            color={{ base: `initial`, xl: `#fff` }}
            fontSize={{
              base: `32`,
              sm: `52px`,
              md: `64px`,
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
