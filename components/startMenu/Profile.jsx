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
        fontSize={{ base: `24px`, md: `48px` }}
        letterSpacing={1}
        className='accent'
      >
        Kingsley Solomon
      </Heading>
      <Box>
        <Text
          className='accent'
          as={`h2`}
          fontSize={{ base: `3.3rem`, md: `8rem` }}
          lineHeight={1.2}
          fontWeight={700}
        >
          Frontend <br /> Developer.
        </Text>
        <Text
          mt={5}
          fontSize={{ base: `16px`, md: `24px` }}
        >
          I like to craft solid and scalable frontend
          products with great user experiences.
        </Text>
      </Box>
      <Flex gap={5} fontSize={{ base: `10px`, md: `14px` }}>
        <Text flex={1}>
          Highly skilled at progressive enhancement, design
          systems & UI Engineering.
        </Text>
        <Text flex={1}>
          Over 5 of experience building products for
          clients.
        </Text>
      </Flex>
      <Flex justifyContent={`space-between`}>
        <Search />
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
          <CalendarApp />
          <DrawerExample />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
