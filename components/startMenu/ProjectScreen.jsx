import {
  Box,
  Link,
  Flex,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import link from '../../assets/pngegg (5).png';
import github from '../../assets/pngegg (4).png';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Image from 'next/image';
import ProjectDesc from './ProjectDesc';
import Modal from './ModalDesc';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectScreen = () => {
  const { projectInfo } = useContext(AppContext);
  const { colorMode } = useColorMode();
  const active =
    colorMode == `light` ? `darkBg` : `lightBg`;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${projectInfo.name} Chart Stats.`,
      },
    },
  };

  const labels = projectInfo.language;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Languages',
        data: projectInfo.values,
        backgroundColor: projectInfo.colorCode,
      },
    ],
  };

  return (
    <Box
      display={`flex`}
      flexDir={`column`}
      color={`lemon`}
      width={{
        base: `initial`,
        xl: `80%`,
      }}
      m={{
        base: `initial`,
        md: `1.5rem 0 0 auto`,
        lg: `1.5rem 1.5rem 0 auto`,
      }}
    >
      <Box>
        <Text
          display={{ base: `none`, lg: `block` }}
          color={`accent`}
          className='font-mono'
          textTransform={`capitalize`}
          fontWeight={`bold`}
          fontSize={{ base: `md`, md: `2xl`, xl: `2rem` }}
        >
          {projectInfo.name}
        </Text>
        <Text
          fontWeight={`bold`}
          fontSize={`xs`}
          color={`accent`}
          textAlign='left'
        >
          {projectInfo.category}
        </Text>
      </Box>
      <Box
        display={{ base: `block`, lg: `none` }}
        textAlign={`right`}
      >
        <Modal contributors={projectInfo.contributors} />
      </Box>
      {/* Chart */}
      <Bar options={options} data={data} />
      {/*  */}
      <Flex width={`100%`} flexDir={`column`}>
        <Flex
          justifyContent={`start`}
          gap={3}
          alignItems={`center`}
          flexDir={'row-reverse'}
        >
          <Link
            color={
              colorMode == `light` ? `accent` : `lightBg`
            }
            className='font-sans'
            fontSize={{ base: `xs`, sm: `sm`, md: `md` }}
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.url}
          >
            Visit this site.
          </Link>
          <Box
            filter={`drop-shadow(1px 1px 1px #00000030)`}
            width={{
              base: `1.6em`,
              sm: `1.9em`,
              md: `2em`,
            }}
            height={{
              base: `1.6em`,
              sm: `1.9em`,
            }}
            className={`spin`}
            p={`3px`}
          >
            <Image
              width={`100%`}
              height={`100%`}
              alt='img'
              src={link}
            />
          </Box>
        </Flex>
        {/*  */}
        <Flex
          gap={3}
          justifyContent={`end`}
          alignItems={`end`}
          flexDir={'row-reverse'}
        >
          <Box
            width={{
              base: `1.6em`,
              sm: `1.8em`,
            }}
            height={{
              base: `1.6em`,
              sm: `1.8em`,
            }}
            p={`3px`}
            filter={`drop-shadow(1px 1px 1px #00000030)`}
          >
            <Image
              className={`spin`}
              width={`100%`}
              height={`100%`}
              alt='img'
              src={github}
            />
          </Box>
          <Link
            color={
              colorMode == `light` ? `accent` : `lightBg`
            }
            className='font-sans'
            fontSize={{ base: `xs`, sm: `sm`, md: `md` }}
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.github}
          >
            View this project on Github.
          </Link>
        </Flex>
      </Flex>
      <Box display={{ base: `none`, lg: `block` }}>
        <ProjectDesc
          inModal={false}
          contributors={projectInfo.contributors}
        />
      </Box>
    </Box>
  );
};

export default ProjectScreen;
