import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsDot } from 'react-icons/bs';

const NotificationBar = ({ comment }) => {
  const { name, image, job, review } = comment;
  const tag = {
    bg: `#00000010`,
    color: `matrixDark`,
    px: 2,
    borderRadius: `5px`,
    fontStyle: `italic`,
    fontWeight: `bold`,
    as: `span`,
    fontSize: { base: `10px`, sm: `12px` },
    width: `fit-content`,
  };
  return (
    <Box
      width={`100%`}
      overflow={`scroll`}
      className={`hide-scrollbar`}
      display={`flex`}
      alignItems={`top`}
      padding={`2rem`}
      mb={3}
      gap={3}
    >
      <Avatar
        className='box-shadow'
        name={name}
        src={image}
        size={`lg`}
      />
      <Box>
        <Flex alignItems={`center`}>
          <Text
            fontSize={{ base: `12px`, md: `14px` }}
            fontWeight={700}
          >
            {name}
          </Text>
          <Icon as={BsDot} />
          <Text textTransform={`capitalize`} sx={tag}>
            {job}
          </Text>
        </Flex>
        <Text
          mt={1}
          fontSize={{ base: `12px`, xl: `14px` }}
        >
          {review}
        </Text>
      </Box>
    </Box>
  );
};

export default NotificationBar;
