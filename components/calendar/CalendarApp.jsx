import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  Divider,
  Box,
} from '@chakra-ui/react';
import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import Time from './Time';

const CalendarApp = () => {
  const [timeMin, setTimeMin] = useState(null);
  const [timeFull, setTimeFull] = useState(null);
  const [session, setSession] = useState(null);
  const [value, onChange] = useState(new Date());

  const getTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';

    if (hour == 0) {
      hour = 12;
    }
    if (hour > 12) {
      hour = hour - 12;
      session = 'PM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = `${hour}:${minutes} ${session}`;
    let timeFull = `${hour}:${minutes}:${seconds}`;
    let t = setTimeout(function () {
      getTime();
    }, 1000);

    setSession(session);
    setTimeMin(time);
    setTimeFull(timeFull);
  };

  useEffect(() => {
    getTime();
  });

  return (
    <Menu placement={`top`} gutter={12}>
      <MenuButton marginX={`1rem`}>
        <Text
          fontWeight={`medium`}
          fontSize={{ base: '10', sm: 'md' }}
        >
          {timeMin}
        </Text>
      </MenuButton>
      <MenuList
        borderRadius={0}
        className='theme'
        minW={{ base: `100vw`, sm: `30rem` }}
        height={{ base: `100vh`, sm: `50rem` }}
        display={`flex`}
        flexDir={`column`}
        alignItems={`stretch`}
        border={0}
        margin={0}
      >
        <Box padding={`1rem`}>
          <Time time={timeFull} session={session} />
        </Box>
        <Divider />
        <Box
          fontSize={{ base: `10px`, md: '14px' }}
          padding={{ base: '0', md: `1rem` }}
        >
          <Calendar onChange={onChange} value={value} />
        </Box>
        <Divider />
      </MenuList>
    </Menu>
  );
};

export default CalendarApp;
