import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Start from './startMenu/Start';
import Search from './searchBar/Search';
import DrawerExample from './drawer/Drawer';
import Calendar from './calendar/CalendarApp';
import BatteryInfo from './BatteryInfo';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NavigationBar() {
  const { weatherInfo } = useContext(AppContext);

  return (
    <Box
      paddingX={{ base: 0, md: `1rem` }}
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
      >
        <Start />
        <Search />
      </Flex>
      <Flex></Flex>
      <Flex
        alignItems={`center`}
        justifyContent={`end`}
        paddingRight={`1rem`}
      >
        {weatherInfo && (
          <Flex
            display={{ base: `none`, sm: `flex` }}
            marginX={`1rem`}
            alignItems={`center`}
          >
            <Image
              width={`2rem`}
              height={`2rem`}
              src={weatherInfo.current.condition.icon}
              alt='icon'
            />
            <Text fontSize={`md`}>
              {weatherInfo.current.temp_c}&deg;C
            </Text>
            <Text ml={1}>
              {weatherInfo.current.condition.text}
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
