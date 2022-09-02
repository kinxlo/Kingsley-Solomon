import { Button, Flex, Link } from '@chakra-ui/react';
import Search from './searchBar/Search';
import React from 'react';
import BatteryInfo from './BatteryInfo';
import CalendarApp from './calendar/CalendarApp';
import DrawerExample from './drawer/Drawer';

const Controls = () => {
  return (
    // {/* APIs */ }
    <Flex
      mb={{ base: `1rem`, xl: 0 }}
      gap={10}
      flexDirection={{ base: `column`, xl: `row` }}
      justifyContent={`space-between`}
      alignItems={{ base: `start`, lg: `center` }}
    >
      <Flex justifyContent={`space-between`} gap={10}>
        <Search />
        <Button
          border={`1px solid`}
          padding={{
            base: `5px 20px`,
            md: `10px 40px`,
          }}
          _hover={{
            color: `rgb(208, 0, 255) !important`,
          }}
          fontSize={{ base: `10px`, md: `14px` }}
          fontWeight={`bold`}
          className='font-mono'
        >
          <Link
            download
            rel='noopener noreferrer'
            href='/KingsleySolomon_Ifijeh_Resume.PDF'
          >
            Resume
          </Link>
        </Button>
      </Flex>
      <Flex
        color={`darkBg`}
        flexDir={{ base: `column`, sm: `row` }}
        alignItems={{ base: `initial`, sm: `center` }}
        justifyContent={`end`}
      >
        <Flex
          flexDir={{ base: `column`, md: `row` }}
          alignItems={{ base: `initial`, md: `center` }}
          gap={3}
        >
          <Flex gap={5} alignItems={`center`}>
            <BatteryInfo />
            <CalendarApp />
            {/* <Text fontWeight={`medium`}>{timeMin}</Text> */}
          </Flex>
          <DrawerExample />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Controls;
