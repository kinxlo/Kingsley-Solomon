import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import Reviews from '../drawer/Reviews';

import {
  lightSticker,
  darkSticker,
} from '../../theme/customTheme';
// import Background from './Background';

const Profile = () => {
  const { colorMode } = useColorMode();

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
      maxW={{ base: `100%`, lg: `50%` }}
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
      <Box>
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
            flexDir={`column`}
            justifyContent={{ base: `space-between` }}
            gap={`1rem`}
          >
            <Flex alignItems={`end`} gap={2}>
              <Text
                as={`h2`}
                fontSize={{
                  base: `4rem`,
                  md: `6rem`,
                  '2xl': `8rem`,
                }}
                lineHeight={1.1}
                fontWeight={`bold`}
                className='font-serif'
              >
                Kingsley <br /> Solomon.
              </Text>
              <Reviews />
            </Flex>
            <Box>
              <Text
                color={`accent`}
                fontWeight={900}
                letterSpacing={`1px`}
                textTransform={`uppercase`}
                className='font-serif'
              >
                Frontend Developer
              </Text>
              <Text
                className='font-sans'
                fontSize={{ base: `12px`, sm: `14px` }}
                mt={5}
                mb={10}
              >
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet, vitae
                perspiciatis ea perferendis nemo corrupti.
                Doloremque illo amet sapiente minima!
              </Text>
              <Link
                download
                target={`_blank`}
                href='../../public/KingsleySolomon_Ifijeh_Resume.PDF'
              >
                <Button
                  display={`flex`}
                  gap={5}
                  alignItems={`center`}
                  background={`trtnasparent`}
                  border={`2px solid`}
                  size={`lg`}
                  fontSize={`1.3em`}
                  p={`2rem 2.5rem`}
                  borderRadius={`100px`}
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
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
