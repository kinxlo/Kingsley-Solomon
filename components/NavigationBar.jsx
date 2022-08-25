import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Start from './startMenu/Start';
import Search from './searchBar/Search';
import DrawerExample from './drawer/Drawer';
import Calendar from './calendar/CalendarApp';
import BatteryInfo from './BatteryInfo';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NavigationBar() {
  const { weatherData } = useContext(AppContext);

  return (
    <Box
      paddingX={3}
      zIndex={9999}
      pos={`fixed`}
      bottom={0}
      width={`100vw`}
      height={{ base: `2rem`, sm: `3rem` }}
      className='theme accent'
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
    >
      <Flex
        justifyContent={`space-between`}
        alignItems={`center`}
        gap={7}
      >
        <Start />
        <Search />
      </Flex>
      <Flex></Flex>
      <Flex alignItems={`center`} justifyContent={`end`}>
        {!weatherData && <Text>LOADING...</Text>}
        {weatherData && (
          <Flex
            display={{ base: `none`, sm: `flex` }}
            marginX={`1rem`}
            alignItems={`center`}
          >
            <Image
              width={`2rem`}
              height={`2rem`}
              src={weatherData.current.condition.icon}
              alt='icon'
            />
            <Text fontSize={`md`}>
              {weatherData.current.temp_c}&deg;C
            </Text>
            <Text ml={1}>
              {weatherData.current.condition.text}
            </Text>
          </Flex>
        )}
        <BatteryInfo />
        <Calendar />
        <DrawerExample />
      </Flex>
    </Box>
  );
}
