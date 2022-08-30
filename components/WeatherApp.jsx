import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WeatherApp = () => {
  const { weatherData } = useContext(AppContext);

  if (!weatherData) return <Text>LOADING...</Text>;
  if (weatherData) {
    return (
      <Box
        className='weatherApp'
        width={`100%`}
        height={`100%`}
        // p={`3rem`}
      >
        <Box
          width={`100%`}
          height={`100%`}
          position={`relative`}
          zIndex={2}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`space-around`}
        >
          <Text
            fontSize={`24px`}
            fontWeight={`bold`}
            textAlign={`center`}
          >{`${weatherData.location.name}, ${weatherData.location.country}`}</Text>

          <Flex
            justifyContent={`center`}
            flexDir={`column`}
            alignItems={`center`}
          >
            <Image
              width={`6rem`}
              height={`6rem`}
              src={weatherData.current.condition.icon}
              alt={`img`}
            />
            <Text
              className='calendarAppText'
              fontSize={`3xl`}
            >
              {weatherData.current.condition.text}
            </Text>
          </Flex>
          <Flex justifyContent={`center`} gap={10}>
            <Text
              fontWeight={`bold`}
              className='calendarAppText font-mono'
              fontSize={`4xl`}
            >
              {weatherData.current.temp_c}&deg;C
            </Text>
            <Text
              fontWeight={`bold`}
              className='calendarAppText font-mono'
              fontSize={`4xl`}
            >
              {weatherData.current.temp_f}&#x2109;
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  }
};

export default WeatherApp;
