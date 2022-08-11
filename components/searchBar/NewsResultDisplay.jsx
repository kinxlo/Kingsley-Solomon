import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

const NewsResultDisplay = ({ result }) => {
  const { link, title, title_detail } = result;
  return (
    <Box mb={5}>
      <NextLink href={link} passHref>
        <Link fontSize={`sm`}>{link}</Link>
      </NextLink>
      <NextLink href={link} passHref>
        <Text
          cursor={`pointer`}
          color={`#4C8BF5`}
          fontSize={`2xl`}
          as={`h1`}
        >
          {title}
        </Text>
      </NextLink>
      <Text as={`p`}>{title_detail.value}</Text>
    </Box>
  );
};

export default NewsResultDisplay;
