import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
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

  console.log(projectInfo);
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
      alignItems={`center`}
      // border={`1px solid red`}
      color={`lemon`}
      width={{ base: `initial`, '2xl': `80%` }}
      m={{base:`initial`, lg:`1.5rem 1.5rem 0 auto`}}
    >
      <Bar options={options} data={data} />
    </Box>
  );
};

export default ProjectScreen;
