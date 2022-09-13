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
  const { handleMouseEnter, handleMouseLeave } =
    useContext(AppContext);

  const bgText = {
    content: `'Hi!'`,
    position: `fixed`,
    bottom: `-20rem`,
    left: 0,
    fontSize: `40rem`,
    fontWeight: `bolder`,
    fontFamily: `var(--font-serif)`,
    letterSpacing: `1rem`,
    color: `${colorMode == `light` ? `darkBg` : `lightBg`}`,
    opacity: `${colorMode == `light` ? `5%` : `3%`}`,
    zIndex: -999,
  };

  return (
    <Flex
      className='profile-view'
      maxW={{ base: `100%`, md: `60%`, xl: `50%` }}
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
                onMouseEnter={(event) =>
                  handleMouseEnter(event, 'message')
                }
                onMouseLeave={handleMouseLeave}
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
                onMouseEnter={(event) =>
                  handleMouseEnter(
                    event,
                    'yea, thats what i am, i dont know ui ux'
                  )
                }
                onMouseLeave={handleMouseLeave}
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
                Frontend Developer
              </Text>
              <Text
                className='font-sans step-3'
                fontSize={{ base: `12px`, sm: `14px` }}
                mt={5}
                mb={10}
              >
                I really enjoy building Intresting stuffs and give great user expirence
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
