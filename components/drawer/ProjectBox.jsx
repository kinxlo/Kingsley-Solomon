import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { RiGithubLine, RiLink } from 'react-icons/ri';
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
          my={5}
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
          // bgColor={{ base: `accent`, lg: `initial` }}
          // bgBlendMode={`screen`}
          _hover={{
            bgBlendMode: `normal`,
            filter: `grayscale(0)`,
          }}
        >
          <Box
            width={{ lg: `32rem`, '2xl': `50rem` }}
            height={{ lg: `20rem`, '2xl': `30rem` }}
            className={`project_img_box box-shadow`}
            display={{ base: `none`, lg: `block` }}
            transform={{
              base: `translateX(0)`,
              lg: `translateX(10rem)`,
            }}
            bg={`accent`}
          >
            <Image
              className='project_img'
              boxSize={`100%`}
              mixBlendMode={`multiply`}
              filter={`grayscale(50%)`}
              _hover={{
                mixBlendMode: `normal`,
                filter: `grayscale(0)`,
              }}
              objectFit={``}
              src={project.image}
              alt=''
            />
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
            p={10}
          >
            <Text
              fontSize={`14px`}
              color={`accent`}
              className={`font-mono`}
            >
              {project.category}
            </Text>
            <Text fontWeight={`bolder`} fontSize={`24px`}>
              {project.name}
            </Text>
            <Box
              my={5}
              p={5}
              borderRadius={10}
              bg={
                colorMode == `light` ? `lightBg` : `darkBg`
              }
              className='box-shadow'
              width={{ base: `100%`, lg: `30rem` }}
            >
              <Text
                color={
                  colorMode == `light`
                    ? `darkBg`
                    : `lightBg`
                }
                textTransform={`lowercase`}
                fontWeight={`medium`}
              >
                {project.desc}
              </Text>
            </Box>
            <Flex mb={5} gap={4}>
              {project.language.map(function (code, index) {
                return (
                  <Text
                    // color={`accent`}
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
                <Icon fontSize={`2rem`} as={RiGithubLine} />
              </Link>
              <Link
                _hover={{
                  color: `rgb(208, 0, 255) !important`,
                }}
                target={`_blank`}
                href={project.url}
              >
                <Icon fontSize={`2rem`} as={RiLink} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      );
    });
    return (
      <Flex>
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
            pos={`fixed`}
            bottom={0}
            right={{ xl: 0 }}
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
      </Flex>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
