import { Avatar, AvatarGroup, Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

const ProjectDesc = ({ contributors, about, status, date, inModal }) => {
    // Utility function to calculate the difference in months and years
    const calculateTimeAgo = (dateString) => {
        const now = new Date();
        const givenDate = new Date(dateString);

        // Calculate the number of years difference
        let yearsDifference = now.getFullYear() - givenDate.getFullYear();
        let monthsDifference = now.getMonth() - givenDate.getMonth();
        if (monthsDifference < 0) {
            yearsDifference--;
            monthsDifference += 12;
        }

        // Adjust for days within the month
        if (now.getDate() < givenDate.getDate()) {
            monthsDifference--;
            if (monthsDifference < 0) {
                yearsDifference--;
                monthsDifference += 12;
            }
        }

        return { yearsDifference, monthsDifference };
    };

    const { yearsDifference, monthsDifference } = calculateTimeAgo(date);

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
                        {yearsDifference > 0 ? (
                            <span>
                                {yearsDifference} {yearsDifference === 1 ? "year" : "years"} ago
                            </span>
                        ) : (
                            <span>
                                {monthsDifference} {monthsDifference === 1 ? "month" : "months"} ago
                            </span>
                        )}
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
                    <AvatarGroup size='md' max={3}>
                        {contributors ? (
                            contributors.map((dev) => {
                                return <Avatar color={`black`} key={dev.name} name={dev.name} src={dev.img} />;
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
