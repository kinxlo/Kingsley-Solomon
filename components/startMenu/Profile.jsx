import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import BatteryInfo from '../BatteryInfo';
import CalendarApp from '../calendar/CalendarApp';
import DrawerExample from '../drawer/Drawer';
import Search from '../searchBar/Search';

const Profile = () => {
  const { weatherData } = useContext(AppContext);
  return (
    <Flex
      position={`relative`}
      flexDir={`column`}
      justifyContent={`space-evenly`}
      p={0}
      height={`100%`}
    >
      <Heading
        fontSize={{ base: `24px`, sm: `42px` }}
        letterSpacing={1}
        // className='accent'
      >
        Kingsley Solomon
      </Heading>
      <Box>
        <Text
          className='accent'
          as={`h2`}
          fontSize={{ base: `4rem`, md: `8rem` }}
          lineHeight={1.2}
          fontWeight={700}
        >
          Frontend <br /> Developer.
        </Text>
        <Text
          lineHeight={`1rem`}
          fontStyle={`italic`}
          fontSize={{
            base: `12px`,
            sm: `16px`,
            lg: `20px`,
          }}
        >
          Integrating <Text as={`span`}>Science,</Text>
          {` `}
          <Text as={`span`}>Art,</Text>
          {` `}
          and {` `}
          <Text as={`span`}>APIs.</Text>
        </Text>
      </Box>
      <Flex
        gap={5}
        fontSize={{ base: `10px`, sm: `14px`, md: `16px` }}
      >
        <Text flex={1}>
          Highly skilled at design patterns & responsive
          design.
        </Text>
        <Text flex={1}>
          Over 3 Years experience with frontend development
        </Text>
      </Flex>
      <Flex
        gap={10}
        flexDirection={{ base: `column`, xl: `row` }}
        justifyContent={`space-between`}
        alignItems={{ base: `start`, lg: `center` }}
      >
        <Search />
        <Flex
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
              {!weatherData && <Text>LOADING...</Text>}
              {weatherData && (
                <Flex alignItems={`center`}>
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
            </Flex>
            <DrawerExample />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
