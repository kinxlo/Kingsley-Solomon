import { Avatar, AvatarGroup, Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

const ProjectDesc = ({ contributors, about, status, date, inModal }) => {
  return (
    <Flex flexDir={`column`} gap={5} mt={5}>
      <Flex flexDir={{ base: `column`, lg: `row` }} gap={10}>
        {/* about */}
        <Box flex={`1`}>
          <Text mb={1} fontWeight={`bold`} className={`font-sans`}>
            About
          </Text>
          <Text fontSize={{ base: `xs`, lg: `sm` }}>{about}</Text>
        </Box>

        {/* release */}
        <Box flex={`1`}>
          <Text mb={1} fontWeight={`bold`} className={`font-sans`}>
            Inception
          </Text>
          <>
            <Text fontSize={{ base: `xs`, lg: `sm` }}>{date}</Text>
          </>
        </Box>
      </Flex>
      <Flex flexDir={{ base: `column`, lg: `row` }} gap={10}>
        {/* package */}
        <Box flex={`1`}>
          <Text mb={1} fontWeight={`bold`} className={`font-sans`}>
            Status
          </Text>
          <Flex gap={3}>
            {status ? (
              <Text fontSize={`sm`} fontWeight={`bold`} color={`green`}>
                {status}
              </Text>
            ) : (
              <Text>N/A</Text>
            )}
          </Flex>
        </Box>
        {/* contributors */}
        <Box flex={`1`}>
          <Text
            mb={1}
            fontWeight={`bold`}
            className={`font-sans`}
            // color={`blue`}
          >
            Contributors
          </Text>
          <AvatarGroup size="md" max={2}>
            {contributors ? (
              contributors.map((dev) => {
                return <Avatar key={dev.name} name={dev.name} src={dev.img} />;
              })
            ) : (
              <Text>...</Text>
            )}
          </AvatarGroup>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProjectDesc;
