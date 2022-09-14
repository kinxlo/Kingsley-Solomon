import {
  Box,
  Link,
  Flex,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import link from '../../assets/pngegg (2).png';
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
      width={{ base: `initial`, '2xl': `80%` }}
      m={{ base: `initial`, lg: `1.5rem 1.5rem 0 auto` }}
    >
      <Text
        pos={{ base: `static`, xl: `fixed` }}
        top={`1.5rem`}
        left={`1.5rem`}
        color={colorMode == `light` ? `accent` : `lightBg`}
        className='font-mono'
        textTransform={`capitalize`}
        fontWeight={`bold`}
        fontSize={{ base: `md`, md: `2xl` }}
        textAlign={{ base: `center`, xl: `left` }}
      >
        {projectInfo.name}
        <Text
          fontSize={`xs`}
          color={`active`}
          className='font-mono'
          textAlign='left'
          mt={{ base: 6, xl: 0 }}
        >
          {projectInfo.category}
        </Text>
      </Text>
      {/* Chart */}
      <Bar options={options} data={data} />
      {/*  */}
      <Flex width={`100%`} flexDir={`column`} gap={3}>
        <Flex gap={3} alignItems={`center`}>
          <Box
            width={`2rem`}
            height={`2rem`}
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
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.github}
          >
            View this project on Github.
          </Link>
        </Flex>
        {/*  */}
        <Flex
          justifyContent={`end`}
          gap={3}
          alignItems={`center`}
        >
          <Link
            color={
              colorMode == `light` ? `accent` : `lightBg`
            }
            className='font-sans'
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.url}
          >
            Visit this site.
          </Link>
          <Box
            filter={`drop-shadow(1px 1px 1px #00000030) ${
              colorMode == `light`
                ? `invert(0)`
                : `invert(100%)`
            }`}
            width={`2rem`}
            height={`2rem`}
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
      </Flex>
    </Box>
  );
};

export default ProjectScreen;
