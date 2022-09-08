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
    zIndex: -999,
  };

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
            width={{
              lg: `40rem`,
              xl: `32rem`,
              '2xl': `50rem`,
            }}
            height={{
              lg: `25rem`,
              xl: `20rem`,
              '2xl': `30rem`,
            }}
            display={{ base: `none`, lg: `block` }}
            flexDir={`column`}
            justifyContent={`space-between`}
            pos={`absolute`}
            left={{ lg: `30rem`, xl: `15rem` }}
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
              bg={`overlay`}
            >
              <Image
                loading='eager'
                className='project_img'
                boxShadow={`rgba(0, 0, 0, 0.45) 0px 25px 20px -10px`}
                boxSize={`100%`}
                src={project.image}
                alt='img'
                objectFit={`cover`}
                mixBlendMode={`multiply`}
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
            left={{ lg: `20%`, xl: `5%` }}
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
            p={{ base: `2em`, md: `6em`, lg: 0 }}
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
                  : `#80000080`
              }
              backdropFilter={`blur(10px)`}
              width={{ base: `100%`, lg: `30rem` }}
            >
              <Text
                fontSize={{ base: `initial`, xl: `14px` }}
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
