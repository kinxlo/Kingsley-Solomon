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
          alignItems={`center`}
          className='project_'
          width={{ base: `100%`, xl: `70rem` }}
          margin={`2rem auto`}
          key={project.id}
          p={{ base: 10 }}
          backgroundImage={{
            base: project.image,
            xl: `none`,
          }}
          backgroundSize={`cover`}
          backgroundPosition={`right`}
          backgroundRepeat={`no-repeat`}
        >
          <Box
            transform={`translateX(5rem)`}
            width={{ base: ``, xl: `40rem` }}
            height={{ base: ``, xl: `25rem` }}
            className={`project_img`}
            display={{ base: `none`, xl: `block` }}
          >
            <Image
              boxSize={`100%`}
              objectFit={`cover`}
              src={project.image}
              alt=''
            />
          </Box>
          <Flex
            position={`relative`}
            zIndex={999}
            className='project_desc'
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
              width={{ base: `100%`, xl: `30rem` }}
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
          <Flex
            px={2}
            width={`100%`}
            justifyContent={`start`}
          >
            <Text
              fontWeight={`bolder`}
              textTransform={`capitalize`}
              letterSpacing={2}
            >
              {language}
            </Text>
          </Flex>
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
