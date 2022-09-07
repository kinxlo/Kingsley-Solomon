import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { MdOutlineDownloading } from 'react-icons/md';

import {
  lightSticker,
  darkSticker,
} from '../../theme/customTheme';

const Profile = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
    >
      {/* profile */}
      <Box>
        <Flex alignItems={`center`}>
          <Text
            fontSize={`16px`}
            fontWeight={`medium`}
            color={
              colorMode == `light` ? `accent` : `initial`
            }
            className='font-mono'
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
            <Flex flexDirection={`column`} gap={2}>
              <Text
                as={`h2`}
                fontSize={{
                  base: `4rem`,
                  md: `6rem`,
                  '2xl': `8rem`,
                }}
                lineHeight={1.1}
                fontWeight={`bold`}
              >
                Kingsley <br /> Solomon.
              </Text>
            </Flex>
            <Box>
              <Text
                color={`accent`}
                fontWeight={`bolder`}
                letterSpacing={`1px`}
                textTransform={`uppercase`}
                className=''
                fontSize={{
                  base: `10px`,
                  sm: `12px`,
                  md: `15px`,
                  xl: `18px`,
                }}
              >
                Frontend Developer
              </Text>
              <Text fontSize={`14px`} my={10}>
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
                  color={
                    colorMode == `light`
                      ? `accent`
                      : `initial`
                  }
                  background={`trtnasparent`}
                  border={`2px solid`}
                  size={`lg`}
                  fontSize={`1.3em`}
                  p={`2rem 3rem`}
                  borderRadius={`100px`}
                  borderColor={`accent`}
                  _hover={{
                    background: `accent`,
                    color: `#fff`,
                  }}
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
