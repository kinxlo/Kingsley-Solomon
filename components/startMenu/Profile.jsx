import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import Reviews from '../drawer/Reviews';

const Profile = () => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);

  const bgText = {
    content: `'"${
      botMessage ||
      'Greetings!, I would be your guide today. Hover on any content and let me show you the way.'
    }'`,
    width: `20rem`,
    padding: `.3rem .7rem`,
    position: `absolute`,
    top: `5rem`,
    right: `1.5rem`,
    fontSize: { base: `10px`, lg: `12px` },
    borderLeft: `1px solid matrixLight`,
    fontFamily: `var(--font-mono)`,
    animation: `cursor .7s 3s linear infinite alternate`,
    color: `${
      colorMode == `light` ? `matrixDark` : `matrixLight`
    }`,
    zIndex: 1,
  };

  return (
    <Flex
      className='profile-view'
      maxW={{ base: `100%`, lg: `60%`, xl: `50%` }}
      height={`100vh`}
      width={`100%`}
      alignItems={`center`}
      justifyContent={`center`}
      px={{
        base: `2em`,
        sm: `5em`,
        xl: `10em`,
        '2xl': `15em`,
      }}
      pos={{ base: `sticky`, xl: `relative` }}
      top={0}
      _before={bgText}
    >
      {/* <Background /> */}
      {/* profile */}
      <Box className='step-1'>
        <Flex alignItems={`center`}>
          <Text
            className='font-serif'
            fontSize={`16px`}
            fontWeight={`medium`}
            color={
              colorMode == `light` ? `accent` : `initial`
            }
          >
            Welcome!, I&apos;m
          </Text>
        </Flex>
        <Flex
          flexDir={`column`}
          gap={{
            base: `5rem`,
            sm: `10rem`,
            md: `10rem`,
            xl: `5rem`,
          }}
        >
          <Flex
            className='step-2'
            flexDir={`column`}
            justifyContent={{ base: `space-between` }}
          >
            <Flex alignItems={`end`} gap={2}>
              <Text
                as={`h2`}
                fontSize={{
                  base: `5rem`,
                  sm: `6rem`,
                  md: `8rem`,
                  xl: `5rem`,
                  '2xl': `7rem`,
                }}
                lineHeight={1.1}
                fontWeight={`bold`}
                className='font-serif'
              >
                Kingsley <br /> Solomon.
              </Text>
              <Reviews />
            </Flex>
            <Box width={`fit-content`}>
              <Text
                color={`accent`}
                fontWeight={900}
                letterSpacing={`1px`}
                textTransform={`uppercase`}
                className='font-serif'
                fontSize={{
                  base: `16px`,
                  md: `18px`,
                  '2xl': `20px`,
                }}
              >
                Web Developer | Tutor
              </Text>
              <Text
                letterSpacing={`1px`} 
                className='font-sans step-3'
                fontSize={{ base: `12px`, sm: `14px` }}
                mt={5}
                mb={10}
              >
                As a{' '}
                <Text
                  fontSize={{ base: `12px`, sm: `14px` }}
                  as={`span`}
                >
                  Frontend focused{' '}
                </Text>
                Web developer. Kingsley enjoys converting UI
                designs to codes. Bring your ideas, lets
                make it a reality.
              </Text>
              <Box width={`fit-content`}>
                <Link
                  onMouseEnter={(event) =>
                    handleMouseEnter(event, 'more message')
                  }
                  onMouseLeave={handleMouseLeave}
                  download
                  target={`_blank`}
                  href='../../public/KingsleySolomon_Ifijeh_Resume.PDF'
                >
                  <Button
                    display={`flex`}
                    background={`trtnasparent`}
                    border={`1px`}
                    fontSize={`18px`}
                    fontWeight={900}
                    p={`1.5rem 2rem`}
                    borderRadius={`10px`}
                    letterSpacing={`1px`}
                    borderColor={`accent`}
                    _hover={{
                      background: `accent`,
                      color: `#fff`,
                    }}
                    className='font-serif'
                  >
                    Resume
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
