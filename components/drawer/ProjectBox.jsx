import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { RiGithubLine, RiLink } from 'react-icons/ri';
import { AppContext } from '../../context/AppContext';

const ProjectBox = () => {
  const { projects, language } = useContext(AppContext);

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Flex
          position={`relative`}
          alignItems={`center`}
          className='project_'
          margin={`5rem auto`}
          width={{ base: `100%`, lg: `80%` }}
          height={{ base: `50rem` }}
          p={10}
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
            className={`project_img`}
            display={{ base: `none`, lg: `block` }}
          >
            <Image
              boxSize={`100%`}
              objectFit={`cover`}
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
          >
            <Text fontSize={`14px`} className={`accent`}>
              {project.category}
            </Text>
            <Text fontSize={`24px`}>{project.name}</Text>
            <Box
              my={5}
              className='project_box'
              width={{ base: `100%`, lg: `30rem` }}
            >
              <Text
                color={{ base: `#ffff`, xl: `grey` }}
                textTransform={`lowercase`}
              >
                {project.desc}
              </Text>
            </Box>
            <Flex mb={5} gap={4} justifyContent={`end`}>
              {project.language.map(function (code, index) {
                return <Text key={index}>{code}</Text>;
              })}
            </Flex>
            <Flex
              justifyContent={`end`}
              color={`#fff`}
              gap={3}
            >
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
      <>
        <Flex
          flexDir={`column-reverse`}
          justifyContent={`end`}
          alignItems={`end`}
        >
          <Text
            textTransform={`capitalize`}
            fontWeight={700}
            textAlign={`right`}
            fontSize={{
              base: `32`,
              sm: `52px`,
              md: `64px`,
            }}
            my={`5rem`}
            mx={{ base: `1rem`, md: `5rem`, lg: `10rem` }}
          >
            <Text
              fontWeight={`bolder`}
              textTransform={`capitalize`}
              letterSpacing={2}
            >
              {language}
            </Text>{' '}
            projects worth <br /> sharing.
          </Text>
        </Flex>
        {projectList}
      </>
    );
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
