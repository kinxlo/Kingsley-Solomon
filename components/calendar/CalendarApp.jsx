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
  Flex,
  Image,
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
import { AiOutlineLeft } from 'react-icons/ai';

const CalendarApp = () => {
  const { weatherData } = useContext(AppContext);
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
      <Text fontWeight={`medium`}>{timeMin}</Text>
      {!weatherData && <Text>LOADING...</Text>}
      {weatherData && (
        <Flex
          onClick={handleClick}
          // marginX={`1rem`}
          alignItems={`center`}
          cursor={`pointer`}
        >
          <Image
            width={`2rem`}
            height={`2rem`}
            src={weatherData.current.condition.icon}
            alt='icon'
          />
          <Text
            _hover={{ color: `var(--mainActiveColor)` }}
            fontSize={{ base: `sm`, md: `md` }}
            ml={1}
          >
            {weatherData.current.temp_c}&deg;C{' '}
            {weatherData.current.condition.text}
          </Text>
        </Flex>
      )}

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerContent
          className='theme'
          maxW={{ base: `100vw`, md: `27rem` }}
          height={`100vh`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          gap={`2`}
        >
          <Flex
            justifyContent={`space-between`}
            alignItems={`center`}
            padding={`1rem`}
          >
            <Icon
              onClick={handleClick}
              className={`accent`}
              boxSize={`1.5rem`}
              as={AiOutlineLeft}
            />
            <Time time={timeFull} session={session} />
          </Flex>
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
