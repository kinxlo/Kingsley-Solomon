import { Flex, Icon, Text } from '@chakra-ui/react';
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getBatteryInfo } from '../public/functions.js';
import {
  MdBatteryFull,
  MdBatteryChargingFull,
} from 'react-icons/md';

const BatteryInfo = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isBatteryCharging, setBatteryCharging] =
    useState(null);

  const fetchBatteryInfo = useCallback(async () => {
    const battery = await navigator.getBattery();

    setBatteryCharging(battery.charging);
    setBatteryLevel(`${battery.level * 100}%`);

    battery.addEventListener('chargingchange', () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
      setBatteryCharging(battery.charging);
    }

    battery.addEventListener('levelchange', () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
      setBatteryLevel(`${battery.level * 100}%`);
    }
  }, []);

  useEffect(() => {
    fetchBatteryInfo();
  }, [fetchBatteryInfo]);

  return (
    <Flex alignItems={`center`}>
      <Icon
        as={
          isBatteryCharging
            ? MdBatteryChargingFull
            : MdBatteryFull
        }
      />
      <Text>{batteryLevel}</Text>
    </Flex>
  );
};

export default BatteryInfo;
