import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from '@chakra-ui/react';
import { MdWbSunny } from 'react-icons/md';

const SliderComponent = () => {
  return (
    <Slider marginY={`1rem`} aria-label='slider-ex-4' defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack bg='green' />
      </SliderTrack>
      <SliderThumb boxSize={5}>
        <Box color='green' as={MdWbSunny} />
      </SliderThumb>
    </Slider>
  );
};

export default SliderComponent;
