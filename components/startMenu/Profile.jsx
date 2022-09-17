import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { AppContext } from '../../context/AppContext';
import PreLoader from './PreLoader';
// import Reviews from '../drawer/Reviews';
// import { Suspense } from 'react';
const Reviews = dynamic(() => import('../drawer/Reviews'), {
  suspense: true,
});

const Profile = () => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);

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
    >
      {/* <Background /> */}
      {/* profile */}
      <Box className='step-1'>
        <Flex alignItems={`center`}>
          <Text
            className='font-serif slide-in'
            fontSize={`16px`}
            fontWeight={`medium`}
            color={`accent`}
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
              <Box>
                <Text
                  as={`h2`}
                  textTransform={`uppercase`}
                  fontSize={{
                    base: `32px`,
                    sm: `3.5em`,
                    md: `4.5em`,
                    xl: `4em`,
                    '2xl': `4.5em`,
                  }}
                  lineHeight={1.1}
                  // px={{ base: `10px`, sm: `20px` }}
                  letterSpacing={`5px`}
                  fontWeight={`bold`}
                  className='font-display slide-in'
                >
                  Ifijeh
                </Text>
                <Text
                  as={`h2`}
                  fontSize={{
                    base: `32px`,
                    sm: `3.5em`,
                    md: `4.5em`,
                    xl: `4em`,
                    '2xl': `4.5em`,
                  }}
                  textTransform={`uppercase`}
                  lineHeight={1.1}
                  px={{ base: `10px`, sm: `20px` }}
                  py={1}
                  bg={
                    colorMode == `light`
                      ? `darkBg`
                      : `lightBg`
                  }
                  color={
                    colorMode == `light`
                      ? `lightBg`
                      : `darkBg`
                  }
                  letterSpacing={`5px`}
                  fontWeight={`bold`}
                  className={`slide-in font-display`}
                >
                  Kingsley
                </Text>
              </Box>
              {/* <Suspense fallback={`Loading...`}> */}
              <Reviews />
              {/* </Suspense> */}
            </Flex>
            <Box width={`fit-content`}>
              <Text
                mt={3}
                color={`accent`}
                fontWeight={900}
                letterSpacing={`1px`}
                textTransform={`uppercase`}
                className='font-serif slide-in'
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
                className='font-sans slide-in'
                fontSize={{ base: `12px`, sm: `14px` }}
                mt={5}
                mb={10}
              >
                Kingsley takes pleasure in converting UI
                designs into codes as a frontend-focused web
                developer. Bring your suggestions, and
                let&apos;s make them a reality.
              </Text>
              <Box
                className='action-btn'
                width={`fit-content`}
              >
                <Link
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
