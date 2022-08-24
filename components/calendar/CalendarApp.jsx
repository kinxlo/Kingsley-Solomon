import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  Divider,
  Box,
  DrawerContent,
  Icon,
  Drawer,
  useDisclosure,
} from '@chakra-ui/react';
import Calendar from 'react-calendar';
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import Time from './Time';
import WeatherApp from '../WeatherApp';
import { FcAbout } from 'react-icons/fc';
import { AppContext } from '../../context/AppContext';

const CalendarApp = () => {
  const [timeMin, setTimeMin] = useState(null);
  const [timeFull, setTimeFull] = useState(null);
  const [session, setSession] = useState(null);
  const [value, onChange] = useState(new Date());

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleMapNotice } = useContext(AppContext);

  const handleClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

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
    <>
      <Text
        onClick={handleClick}
        fontWeight={`medium`}
        cursor={`pointer`}
        mx={5}
      >
        {timeMin}
      </Text>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          maxW={{ base: `100vw`, md: `27rem` }}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
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
          <WeatherApp />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CalendarApp;
