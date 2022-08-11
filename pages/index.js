import { Icon, Text } from '@chakra-ui/react';
import NavigationBar from '../components/NavigationBar';
import { DiWindows } from 'react-icons/di'
// import MapView from '../components/MapView';

export default function Home() {
  return (
    <>
      <section className='screen hide-scrollbar'>
        {/* <MapView /> */}
        <Text display={`flex`} alignItems={`center`} as={`p`} color={`#fff`} pos={`absolute`} right={3} bottom={3} textTransform={`Capitalize`}>Inspired by Windows
          <Icon className='accent' as={DiWindows} fontSize={`2rem`} ml={`.3rem`} />
        </Text>
      </section>
      <NavigationBar />
    </>
  )
}
