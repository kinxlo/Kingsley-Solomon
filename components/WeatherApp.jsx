import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WeatherApp = () => {
  const { weatherInfo } = useContext(AppContext);

  if (weatherInfo) {
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
            textAlign={`center`}
          >{`${weatherInfo.location.name}, ${weatherInfo.location.country}`}</Text>

          <Flex
            justifyContent={`center`}
            flexDir={`column`}
            alignItems={`center`}
          >
            <Image
              width={`6rem`}
              height={`6rem`}
              src={weatherInfo.current.condition.icon}
              alt={`img`}
            />
            <Text
              className='calendarAppText'
              fontSize={`3xl`}
            >
              {weatherInfo.current.condition.text}
            </Text>
          </Flex>
          <Flex justifyContent={`center`} gap={10}>
            <Text
              className='calendarAppText'
              fontSize={`4xl`}
            >
              {weatherInfo.current.temp_c}&deg;C
            </Text>
            <Text
              className='calendarAppText'
              fontSize={`4xl`}
            >
              {weatherInfo.current.temp_f}&#x2109;
            </Text>
          </Flex>
        </Box>
      </Box>
    );
  }
};

export default WeatherApp;
