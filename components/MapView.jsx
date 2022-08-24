import { Box, Icon } from '@chakra-ui/react';
import React, {
  useContext,
  useEffect,
  useRef,
} from 'react';
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,

} from 'react-icons/ai';

import { Feature, Map, Overlay, View } from 'ol/index';
import Point from 'ol/geom/Point';
import { Circle, Fill, Style } from 'ol/style';
import TileJSON from 'ol/source/TileJSON';
import { Vector as VectorSource } from 'ol/source';
import { useGeographic, fromLonLat } from 'ol/proj';
import {
  Tile as TileLayer,
  Vector as VectorLayer,
} from 'ol/layer';
import { AppContext } from '../context/AppContext';

const MapView = () => {
  const mapElement = useRef();
  const { showMapOrNotice, toggleMapNotice } =
    useContext(AppContext);
  useGeographic();

  const mapInit = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      const myPlace = [3.436, 55.3781]; //my place
      const myPoint = new Point(myPlace); //my location

      const yourPlace = [crd.longitude, crd.latitude]; //your place
      const yourPoint = new Point(yourPlace); //your location

      new Map({
        target: mapElement.current,
        view: new View({
          center: yourPlace,
          zoom: 2,
        }),
        layers: [
          new TileLayer({
            source: new TileJSON({
              url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
              crossOrigin: '',
            }),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [
                new Feature(myPoint),
                new Feature(yourPoint),
              ],
            }),
            style: new Style({
              image: new Circle({
                radius: 5,
                fill: new Fill({ color: 'red' }),
              }),
            }),
          }),
        ],
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(
      success,
      error,
      options
    );
  };

  useEffect(() => {
    mapInit();
  }, []);

  const showMap = () => {
    showMapOrNotice(`SHOW_BIG_MAP`);
  };
  const hideMap = () => {
    showMapOrNotice(`SHOW_MAP`);
  };

  return (
    <Box
      id='map'
      w={`100%`}
      h={`100%`}
      ref={mapElement}
      overflow={`hidden`}
      className='hide-scrollbar'
      position={`relative`}
    >
      {toggleMapNotice.showBigMap ? (
        <Icon
          className='theme accent'
          onClick={hideMap}
          p={2}
          fontSize={`2.5rem`}
          borderRadius={`100%`}
          pos={`absolute`}
          right={1}
          bottom={1}
          zIndex={2}
          backgroundColor={`#00000060`}
          as={AiOutlineFullscreenExit}
          cursor={`pointer`}
        ></Icon>
      ) : (
        <Icon
          className='theme accent'
          onClick={showMap}
          p={2}
          fontSize={`2.5rem`}
          borderRadius={`100%`}
          pos={`absolute`}
          right={1}
          bottom={1}
          zIndex={2}
          as={AiOutlineFullscreen}
          cursor={`pointer`}
        ></Icon>
      )}
    </Box>
  );
};

export default MapView;
