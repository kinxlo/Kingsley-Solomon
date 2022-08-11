import { Box, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ProjectBox = () => {
  const { projects } = useContext(AppContext);

  if (projects.length) {
    let projectList = projects.map((project) => {
      return (
        <Box
          // filter={`drop-shadow(1px 1px 2px #010101)`}
          display={`flex`}
          justifyContent={`end`}
          width={`100%`}
          height={`10rem`}
          marginY={`1rem`}
          gap={3}
          borderRadius={`5px`}
          overflow={`hidden`}
          background={`#59595950`}
          key={project.id}
        >
          <Image
            objectFit={`cover`}
            src={project.image}
            alt='project'
          />
        </Box>
      );
    });
    return <>{projectList}</>;
  } else {
    return (
      <Text textAlign={`center`}>
        No project at the moment
      </Text>
    );
  }
};

export default ProjectBox;
