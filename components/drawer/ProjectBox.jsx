import {
  Box,
  Flex,
  Icon,
  Image,
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
          margin={`2rem auto`}
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
              Lorem, ipsum.
            </Text>
            <Text fontSize={`24px`}>Lorem, ipsum.</Text>
            <Box
              my={5}
              className='project_box'
              width={{ base: `100%`, lg: `30rem` }}
            >
              <Text
                color={{ base: `#ffff`, xl: `grey` }}
                textTransform={`lowercase`}
              >
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sequi, debitis amet eaque
                quam aut accusantium laudantium? Pariatur
                minima dignissimos facilis tempore quaerat
                molestias maiores esse alias, ipsum placeat
                reiciendis necessitatibus!
              </Text>
            </Box>
            <Flex mb={5} justifyContent={`end`}>
              <Text>lorem</Text>
              <Text>Lorem ipsum</Text>
              <Text>lorem</Text>
              <Text>lorem</Text>
            </Flex>
            <Flex
              justifyContent={`end`}
              color={`#fff`}
              gap={3}
            >
              <Icon fontSize={`2rem`} as={RiGithubLine} />
              <Icon fontSize={`2rem`} as={RiLink} />
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
