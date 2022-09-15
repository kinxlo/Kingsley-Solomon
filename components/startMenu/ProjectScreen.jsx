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
        md: `50%`,
        lg: `100%`,
        xl: `80%`,
      }}
      m={{
        base: `initial`,
        md: `1.5rem 0 0 auto`,
        lg: `1.5rem 1.5rem 0 auto`,
      }}
    >
      <Text
        pos={{ base: `static`, xl: `fixed` }}
        top={`1.5rem`}
        left={`1.5rem`}
        color={`accent`}
        className='font-mono'
        textTransform={`capitalize`}
        fontWeight={`bold`}
        fontSize={{ base: `md`, md: `2xl`, xl: `2rem` }}
        textAlign={{ base: `center`, xl: `left` }}
      >
        {projectInfo.name}
        <Text
          fontSize={`xs`}
          color={active}
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
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.url}
          >
            Visit this site.
          </Link>
          <Box
            filter={`drop-shadow(1px 1px 1px #00000030)`}
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
        {/*  */}
        <Flex
          gap={3}
          justifyContent={`end`}
          alignItems={`center`}
          flexDir={'row-reverse'}
        >
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
      </Flex>
    </Box>
  );
};

export default ProjectScreen;
