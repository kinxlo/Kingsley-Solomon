import { Box, Link, Image, Flex, Text, useColorMode } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import Image from 'next/image';
import ProjectDesc from "./ProjectDesc";
import Modal from "./ModalDesc";

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
  const url = useRef();
  const gitHub = useRef();
  const { colorMode } = useColorMode();
  const active = colorMode == `light` ? `darkBg` : `lightBg`;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
        label: "Languages",
        data: projectInfo.values,
        backgroundColor: projectInfo.colorCode,
      },
    ],
  };

  const spinUrl = () => {
    url.current.classList.add(`spin`);
    url.current.addEventListener(`animationend`, () => {
      url.current.classList.remove(`spin`);
    });
  };
  const spinGithub = () => {
    gitHub.current.classList.add(`spin`);
    gitHub.current.addEventListener(`animationend`, () => {
      gitHub.current.classList.remove(`spin`);
    });
  };

  return (
    <Box
      pl={{ lg: 5, xl: 0 }}
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
      <Box className="slide-in" display={{ base: `none`, lg: `block` }}>
        <Text
          color={`accent`}
          className="font-mono"
          textTransform={`capitalize`}
          fontWeight={`bold`}
          fontSize={{ base: `md`, md: `2xl` }}
        >
          {projectInfo.name}
        </Text>
        <Text
          fontWeight={`bold`}
          fontSize={`xs`}
          color={`accent`}
          textAlign="left"
        >
          {projectInfo.category}
        </Text>
      </Box>
      <Box display={{ base: `block`, lg: `none` }} textAlign={`right`}>
        <Modal
          title={projectInfo.name}
          contributors={projectInfo.contributors}
        />
      </Box>
      {/* Chart */}
      <Bar options={options} data={data} />
      <Text color={`accent`} mt="2" fontStyle={`italic`} fontSize={`xs`}>
        <Text mr={2} fontWeight={`bolder`} as="span">
          N.B:
        </Text>{" "}
        The approximate figure above shows how much of the language or framework
        was utilized throughout the project&apos;s development. It in no way
        reflects the language&apos;s proficiency.
      </Text>
      {/*  */}
      <Flex width={`100%`} justifyContent={`space-between`} mt={5}>
        <Flex
          justifyContent={`start`}
          gap={3}
          alignItems={`center`}
          flexDir={"row-reverse"}
        >
          <Link
            onMouseEnter={spinUrl}
            color={colorMode == `light` ? `#339adb` : `lightBg`}
            className="font-sans"
            fontSize={{ base: `xs`, sm: `sm` }}
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.url}
          >
            Visit this site.
          </Link>
          <Box
            ref={url}
            // filter={`drop-shadow(1px 1px 1px #00000030)`}
            width={{
              base: `1.6em`,
              sm: `1.9em`,
              md: `2em`,
            }}
            height={{
              base: `1.6em`,
              sm: `1.9em`,
            }}
            p={`3px`}
          >
            <Image
              width={`100%`}
              height={`100%`}
              alt="img"
              src="https://img.icons8.com/officel/30/000000/cloud-link--v1.png"
            />
          </Box>
        </Flex>
        {/*  */}
        <Flex
          gap={3}
          justifyContent={`end`}
          alignItems={`center`}
          flexDir={"row-reverse"}
        >
          <Box
            ref={gitHub}
            width={{
              base: `1.6em`,
              sm: `1.8em`,
            }}
            height={{
              base: `1.6em`,
              sm: `1.8em`,
            }}
            p={`3px`}
          >
            <Image
              width={`100%`}
              height={`100%`}
              alt="img"
              src="https://img.icons8.com/color/48/000000/github--v1.png"
            />
          </Box>
          <Link
            onMouseEnter={spinGithub}
            color={colorMode == `light` ? `#339adb` : `lightBg`}
            className="font-sans"
            fontSize={{ base: `xs`, sm: `sm` }}
            fontWeight={`medium`}
            fontStyle={`italic`}
            href={projectInfo.github}
          >
            View this project on Github.
          </Link>
        </Flex>
      </Flex>
      <Box display={{ base: `none`, lg: `block` }} mt={10}>
        <ProjectDesc
          inModal={false}
          contributors={projectInfo.contributors}
          status={projectInfo.status}
          about={projectInfo.desc}
          date={projectInfo.date}
        />
      </Box>
    </Box>
  );
};

export default ProjectScreen;
