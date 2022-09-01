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
          position={`relative`}
          alignItems={`center`}
          className='project_ section'
          // margin={`5rem auto`}
          // width={{ base: `100%`, lg: `80%` }}
          // p={{ base: 10, '2xl': `5rem` }}
          key={project.id}
          backgroundImage={{
            base: project.image,
            lg: `none`,
          }}
          backgroundSize={`cover`}
          backgroundPosition={`right`}
          backgroundRepeat={`no-repeat`}
        >
          <Box
            width={{ lg: `32rem`, xl: `50rem` }}
            height={{ lg: `20rem`, xl: `30rem` }}
            className={`project_img_box box-shadow`}
            display={{ base: `none`, lg: `block` }}
            transform={`translateX(-10rem)`}
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
            position={{ base: `relative`, lg: `absolute` }}
            zIndex={2}
            right={0}
            textTransform={`capitalize`}
            flexDir={`column`}
            textAlign={`right`}
            transform={`translateX(10rem)`}
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
            <Flex mb={5} gap={4} justifyContent={`center`}>
              {project.language.map(function (code, index) {
                return (
                  <Text
                    color={`accent`}
                    className='font-mono'
                    key={index}
                  >
                    {code}
                  </Text>
                );
              })}
            </Flex>
            <Flex justifyContent={`center`} gap={3}>
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
      <Flex justifyContent={`space-between`}>
        <Text
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
          pos={{ base: `fixed`, lg: `sticky` }}
          textTransform={`capitalize`}
          fontWeight={700}
          textAlign={`right`}
          fontSize={{
            base: `32`,
            sm: `52px`,
            md: `64px`,
          }}
          my={`5rem`}
          width={`fit-content`}
          // mx={{ base: `1rem`, md: `5rem`, lg: `10rem` }}
        >
          {language} <br />
          projects worth <br /> sharing.
        </Text>
        <FullScrollView>{projectList}</FullScrollView>
      </Flex>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
