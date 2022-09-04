import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import {
  lightSticker,
  darkSticker,
} from '../../theme/customTheme';
import Controls from '../Controls';
import SearchResultDisplay from '../searchBar/Search';

const Profile = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      _before={
        colorMode == `light` ? lightSticker : darkSticker
      }
      _after={
        colorMode == `light` ? lightSticker : darkSticker
      }
      className='profile-view'
      pos={{ base: `sticky`, xl: `fixed` }}
      height={{ base: `100vh`, xl: `fit-content` }}
      maxW={{ base: `100%`, xl: `80%`, '2xl': `50%` }}
      margin={`0 auto 0 0`}
      display={{ base: `flex`, xl: `initial` }}
      alignItems={`center`}
      justifyContent={`center`}
    >
      {/* profile */}
      <Box
      // m={{ base: `5rem 0 6rem`, sm: `5rem 0 10rem` }}
      // className={`profile_layout`}
      >
        <Flex alignItems={`center`}>
          <Avatar
            className='box-shadow'
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
              color={`accent`}
              className='font-mono'
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
            <Flex
              mt={`5rem`} mb={{base:`10rem`, xl:`5rem`}}
              flexDirection={`column`}
              gap={2}
            >
              <Text
                color={`spacejelly`}
                // color={
                //   colorMode == `light`
                //     ? `#1a202c`
                //     : `#83868d`
                // }
                as={`h2`}
                fontSize={{ base: `4rem`, md: `8rem` }}
                lineHeight={1.1}
                fontWeight={`bold`}
              >
                Frontend <br /> Developer.
              </Text>
              <Text
                color={`accent`}
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
                Integrating Science, Art, and APIs.
              </Text>
            </Flex>
          </Flex>
          <Flex
            mt={{ base: `5rem`, xl: `1rem` }}
            flexDir={`column`}
            alignItems={{ base: `end`, lg: `end` }}
            fontStyle={`italic`}
            color={`darkBg`}
            display={{ base: `none`, xl: `flex` }}
          >
            <Text
              fontSize={{
                base: `10px`,
                sm: `12px`,
                xl: `15px`,
              }}
              display={`flex`}
              alignItems={`center`}
            >
              Good knowledge in API Implementation.
              <Icon
                display={{ base: `none`, lg: `block` }}
                color='accent'
                as={BsDot}
              ></Icon>
            </Text>

            <Text
              fontSize={{
                base: `10px`,
                sm: `12px`,
                xl: `15px`,
              }}
              display={`flex`}
              alignItems={`center`}
            >
              Skilled at design patterns & responsive
              design.{' '}
              <Icon
                display={{ base: `none`, lg: `block` }}
                color='accent'
                as={BsDot}
              ></Icon>
            </Text>
            <Text
              fontSize={{
                base: `10px`,
                sm: `12px`,
                xl: `15px`,
              }}
              display={`flex`}
              alignItems={`center`}
            >
              Over 3 Years experience with frontend
              development.{' '}
              <Icon
                display={{ base: `none`, lg: `block` }}
                color='accent'
                as={BsDot}
              ></Icon>
            </Text>
          </Flex>
          {/* <Flex
            display={{ base: `none`, lg: `flex` }}
            py={5}
            justifyContent={`space-between`}
            gap={10}
          >
            <SearchResultDisplay />
            <Button
              border={`1px solid`}
              padding={{
                base: `5px 20px`,
                md: `10px 40px`,
              }}
              _hover={{
                color: `rgb(208, 0, 255) !important`,
              }}
              fontSize={{ base: `10px`, md: `14px` }}
              fontWeight={`bold`}
              className='font-mono'
            >
              <Link
                download
                rel='noopener noreferrer'
                href='/KingsleySolomon_Ifijeh_Resume.PDF'
              >
                Resume
              </Link>
            </Button>
          </Flex> */}

          <Flex width={`100%`}>
            <Controls />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
