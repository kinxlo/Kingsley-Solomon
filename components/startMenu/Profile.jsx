import { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { AppContext } from "../../context/AppContext";
import References from "../References";

const Profile = () => {
  const { colorMode } = useColorMode();
  const { handleMouseEnter, handleMouseLeave, botMessage } =
    useContext(AppContext);

  return (
    <Flex
      className="profile-view"
      maxW={{ base: `100%`, lg: `60%`, xl: `50%` }}
      height={`100vh`}
      width={`100%`}
      alignItems={`center`}
      justifyContent={`center`}
      px={{
        base: `2em`,
        sm: `5em`,
        xl: `10em`,
        "2xl": `15em`,
      }}
      pos={{ base: `sticky`, xl: `relative` }}
      top={0}
    >
      {/* <Background /> */}
      {/* profile */}
      <Box className="step-1">
        <Flex mb={5} alignItems={`center`}>
          <Text
            className="font-serif slide-in"
            fontSize={`16px`}
            fontWeight={`medium`}
            // color={`accent`}
          >
            Greetings!, I&apos;m
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
            className="step-2"
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
                    "2xl": `4.5em`,
                  }}
                  lineHeight={1.1}
                  // px={{ base: `10px`, sm: `20px` }}
                  letterSpacing={`5px`}
                  fontWeight={`bold`}
                  className="font-display slide-in"
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
                    "2xl": `4.5em`,
                  }}
                  textTransform={`uppercase`}
                  lineHeight={1.1}
                  px={{ base: `10px`, sm: `20px` }}
                  py={1}
                  bg={colorMode == `light` ? `darkBg` : `lightBg`}
                  color={colorMode == `light` ? `lightBg` : `darkBg`}
                  letterSpacing={`5px`}
                  fontWeight={`bold`}
                  className={`slide-in font-display`}
                >
                  Kingsley
                </Text>
              </Box>
            </Flex>
            <Box width={`fit-content`}>
              <Text
                mt={3}
                // color={`matrixDark`}
                fontWeight={900}
                letterSpacing={`1px`}
                textTransform={`uppercase`}
                className="font-serif slide-in"
                fontSize={{
                  base: `16px`,
                  md: `18px`,
                  "2xl": `20px`,
                }}
              >
                Web Developer | Tutor
              </Text>
              <Text
                // color={`darkBg`}
                letterSpacing={`1px`}
                className="font-sans slide-in"
                fontSize={{ base: `12px`, sm: `14px` }}
                my={5}
              >
                Kingsley takes pleasure in converting UI designs into codes as a{" "}
                <Text
                  bg={`#00000010`}
                  color={`matrixDark`}
                  px={2}
                  borderRadius={`5px`}
                  fontStyle={`italic`}
                  fontWeight={`bold`}
                  id="scroll"
                  as={`span`}
                  fontSize={{ base: `10px`, sm: `12px` }}
                >
                  frontend-focused
                </Text>{" "}
                web developer. Bring your ideas, let&apos;s make them a reality.
                <Text
                  bg={`#00000010`}
                  color={`matrixDark`}
                  px={2}
                  borderRadius={`5px`}
                  fontStyle={`italic`}
                  fontWeight={`bold`}
                  id="scroll"
                  as={`span`}
                  fontSize={{ base: `10px`, sm: `12px` }}
                >
                  Contained within the scroll below is my resume.
                </Text>
              </Text>
              <Box className="action-btn" width={`fit-content`}>
                <a
                  rel="noopener noreferrer"
                  target={`_blank`}
                  href="KingsleySolomon_Ifijeh_Resume.pdf"
                >
                  <Box
                    className={`quil_box action-btn`}
                    title={`see what folks are saying about me`}
                    width={`5rem`}
                  >
                    <Image
                      filter={`drop-shadow(1px 2px 3px #00000060)`}
                      boxSize={`100%`}
                      as={`img`}
                      cursor={`pointer`}
                      alt="quill"
                      src={`https://res.cloudinary.com/kingsleysolomon/image/upload/w_100,f_auto,q_auto,c_fill/v1663409792/portfolio/pngegg_7_yvaqdw.png`}
                    />
                  </Box>
                </a>
                {/* <PreLoader /> */}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex
        px={`1.5em`}
        width={`100%`}
        pos={`absolute`}
        bottom={{ base: `3em`, lg: `1.5em` }}
        zIndex={999}
        as={`span`}
        letterSpacing={`1px`}
        display={{ base: `none`, sm: `flex` }}
        justifyContent={{ base: `center`, lg: `end` }}
      >
        <References />
      </Flex>
    </Flex>
  );
};

export default Profile;
