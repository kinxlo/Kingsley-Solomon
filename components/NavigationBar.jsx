import { Box, Flex } from '@chakra-ui/react';
import Start from './startMenu/Start';
import Search from './searchBar/Search';
import DrawerExample from './drawer/Drawer';
import Calendar from './calendar/CalendarApp';
import BatteryInfo from './BatteryInfo';

export default function NavigationBar() {
  return (
    <Box
      zIndex={9999}
      pos={`fixed`}
      bottom={0}
      width={`100vw`}
      height={{ base: `2rem`, sm: `3rem` }}
      className='theme'
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
    >
      <Flex alignItems={`center`}>
        <Start />
        <Search />
      </Flex>
      <Flex></Flex>
      <Flex
        alignItems={`center`}
        justifyContent={`end`}
        paddingRight={`1rem`}
      >
        <BatteryInfo />
        <Calendar />
        <DrawerExample />
      </Flex>
    </Box>
  );
}
