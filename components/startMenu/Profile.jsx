import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import BatteryInfo from '../BatteryInfo';
import CalendarApp from '../calendar/CalendarApp';
import DrawerExample from '../drawer/Drawer';
import Search from '../searchBar/Search';

const Profile = () => {
  return (
    <Container className='profile-view' maxW={`100%`}>
      {/* profile */}
      <Box
        m={{ base: `5rem 0 6rem`, sm: `5rem 0 10rem` }}
        className={`profile_layout`}
      >
        <Flex mb={`5rem`} alignItems={`center`}>
          <Avatar
            name='kingsley solomon'
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg`}
            size={`md`}
          />{' '}
          <Heading
            fontSize={{
              base: `24px`,
              sm: `32px`,
              md: `42px`,
            }}
            letterSpacing={1}
            borderLeft={`1px solid`}
            pl={2}
            ml={2}
          >
            <Text
              opacity={`70%`}
              fontSize={`sm`}
              className='font-mono accent'
            >
              Hello I&apos;m
            </Text>
            Kingsley Solomon
          </Heading>
        </Flex>
        <Box
          marginRight={{ base: 0, xl: `5rem`, '2xl': 0 }}
        >
          <Flex
            gap={10}
            flexDir={{ base: `column`, xl: `row` }}
            justifyContent={{ base: `space-between` }}
          >
            <Box>
              <Text
                opacity={`80%`}
                className='accent'
                as={`h2`}
                fontSize={{ base: `4rem`, md: `8rem` }}
                lineHeight={1.2}
                fontWeight={700}
              >
                Frontend <br /> Developer.
              </Text>
              <Text
                className='font-mono'
                lineHeight={`1rem`}
                fontStyle={`italic`}
                fontSize={{
                  base: `10px`,
                  sm: `12px`,
                  md: `15px`,
                  xl: `18px`,
                }}
              >
                Integrating{' '}
                <Text as={`span`}>Science,</Text>
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
            alignItems={{ base: `end`, lg: `end` }}
            fontStyle={`italic`}
            fontSize={{
              base: `10px`,
              sm: `12px`,
              xl: `15px`,
            }}
          >
            <Text  display={`flex`} alignItems={`center`}>
              Good knowledge in API Implementation.
              <Icon
                display={{ base: `none`, lg: `block` }}
                className='accent'
                as={BsDot}
              ></Icon>
            </Text>
            <Text display={`flex`} alignItems={`center`}>
              Skilled at design patterns & responsive
              design.{' '}
              <Icon
                display={{ base: `none`, lg: `block` }}
                className='accent'
                as={BsDot}
              ></Icon>
            </Text>
            <Text display={`flex`} alignItems={`center`}>
              Over 3 Years experience with frontend
              development.{' '}
              <Icon
                display={{ base: `none`, lg: `block` }}
                className='accent'
                as={BsDot}
              ></Icon>
            </Text>
          </Flex>
        </Box>
      </Box>
      {/* APIs */}
      <Flex
        mb={{ base: `1rem`, xl: 0 }}
        gap={10}
        flexDirection={{ base: `column`, xl: `row` }}
        justifyContent={`space-between`}
        alignItems={{ base: `start`, lg: `center` }}
      >
        <Flex justifyContent={`space-between`} gap={10}>
          <Search />
          <Link
            fontWeight={`bold`}
            className='font-mono'
            download
            rel='noopener noreferrer'
            href='/KingsleySolomon_Ifijeh_Resume.PDF'
            display={`flex`}
            alignItems={`center`}
            border={`1px solid`}
            padding={{ base: `5px 20px`, md: `10px 40px` }}
            _hover={{
              color: `rgb(208, 0, 255) !important`,
            }}
            fontSize={{ base: `10px`, md: `14px` }}
          >
            Resume
          </Link>
        </Flex>
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
              {/* <Text fontWeight={`medium`}>{timeMin}</Text> */}
            </Flex>
            <DrawerExample />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Profile;
