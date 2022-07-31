import { Box, Flex } from '@chakra-ui/react';
import Start from './startMenu/Start';
import Search from './Search';
import DrawerExample from './drawer/Drawer';
import Calendar from './calendar/CalendarApp';

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
      <Flex justifyContent={`end`} paddingRight={`1rem`}>
        <Calendar />
        <DrawerExample />
      </Flex>
    </Box>
  );
}
