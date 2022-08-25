import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import {
  RiGithubFill,
  RiMacbookFill,
} from 'react-icons/ri';
import { AppContext } from '../../context/AppContext';

const ProjectBox = () => {
  const { projects } = useContext(AppContext);

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Box
          display={`flex`}
          justifyContent={`end`}
          flexDir={`column`}
          width={`100%`}
          height={`14rem`}
          marginY={`1rem`}
          gap={3}
          overflow={`hidden`}
          // background={`#59595950`}
          key={project.id}
        >
          <Image
            objectFit={`cover`}
            src={project.image}
            alt='project'
          />
          <Flex
            px={5}
            justifyContent={`space-between`}
            alignItems={`center`}
          >
            <Text
              letterSpacing={3}
              textTransform={`capitalize`}
            >
              {project.name}
            </Text>
            <Flex gap={5}>
              <Link
                target={`_blank`}
                color={`#fff`}
                href={project.url}
              >
                <Icon
                  boxSize={`1.3rem`}
                  as={RiGithubFill}
                />
              </Link>

              <Link
                target={`_blank`}
                color={`#fff`}
                // className={`accent`}
                href={project.url}
              >
                <Icon
                  boxSize={`1.3rem`}
                  as={RiMacbookFill}
                />
              </Link>
            </Flex>
          </Flex>
        </Box>
      );
    });
    return <>{projectList}</>;
  } else {
    return <Text>No project at the moment</Text>;
  }
};

export default ProjectBox;
