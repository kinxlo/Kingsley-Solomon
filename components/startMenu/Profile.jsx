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
      // justifyContent={{ base: `space-evenly`, xl: `end`, '2xl': `space-evenly` }}
      justifyContent={{ base: `space-evenly` }}
      // gap={{ base: 0, xl: `5rem` }}
      p={0}
      height={`100%`}
    >
      <Heading
        fontSize={{ base: `24px`, sm: `42px` }}
        letterSpacing={1}
      >
        Kingsley Solomon
      </Heading>
      <Box marginRight={{ base: 0, xl: `5rem`, '2xl': 0 }}>
        <Flex
          gap={10}
          flexDir={{ base: `column`, xl: `row` }}
          justifyContent={{ base: `space-between` }}
        >
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
                base: `10px`,
                sm: `12px`,
                md: `15px`,
                xl: `18px`,
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
          <Box
            display={{ base: `none`, xl: `block` }}
            className='profile-pic'
            height={{
              base: `10rem`,
              md: `15rem`,
              xl: `20rem`,
            }}
            width={{
              base: `9rem`,
              md: `14rem`,
              xl: `20rem`,
            }}
          >
            <Image
              height={`100%`}
              objectFit={`cover`}
              alt='profile-img'
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg`}
            />
          </Box>
        </Flex>
        <Flex
          mt={{ base: `5rem`, xl: `1rem` }}
          flexDir={`column`}
          alignItems={`end`}
          fontStyle={`italic`}
          fontSize={{
            base: `10px`,
            sm: `12px`,
            xl: `15px`,
          }}
        >
          <Text>
            Skilled at design patterns & responsive design.
          </Text>
          <Text>
            Over 3 Years experience with frontend
            development.
          </Text>
        </Flex>
      </Box>
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
