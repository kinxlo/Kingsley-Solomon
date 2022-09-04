import { Button, Flex, Link } from '@chakra-ui/react';
import Search from './searchBar/Search';
import React from 'react';
import BatteryInfo from './BatteryInfo';
import CalendarApp from './calendar/CalendarApp';
import Reviews from './drawer/Drawer';

const Controls = () => {
  return (
    // {/* APIs */ }
    <Flex
      gap={10}
      // flexDirection={{ base: `column`, xl: `row` }}
      justifyContent={`space-evenly`}
      // alignItems={{ base: `start`, lg: `center` }}
    >
      <Flex
        flexDir={{ base: `column`, sm: `row` }}
        // alignItems={{ base: `initial`, sm: `center` }}
        justifyContent={`end`}
      >
        <Flex
          flexDir={{ base: `column`, sm: `row` }}
          alignItems={`center`}
          gap={10}
        >
          <Reviews />
          <Flex gap={5} alignItems={`center`}>
            <BatteryInfo />
            <CalendarApp />
            {/* <Text fontWeight={`medium`}>{timeMin}</Text> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Controls;
