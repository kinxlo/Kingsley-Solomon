import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Text,
  Center,
  Flex,
  useColorMode,
  Box,
  ListItem,
  UnorderedList,
  Link,
} from '@chakra-ui/react';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const tag = {
    bg: `#00000010`,
    color: `matrixDark`,
    px: 2,
    borderRadius: `5px`,
    fontStyle: `italic`,
    fontWeight: `bold`,
    as: `span`,
    fontSize: { base: `10px`, sm: `12px` },
    width: `fit-content`,
  };

  return (
    <>
      <Flex
        color={colorMode == `light` ? `darkBg` : `lightBg`}
        gap={{ base: 0, sm: 2 }}
        flexDir={{ base: `column`, sm: `row` }}
        alignItems={`center`}
      >
        <Text
          textDecor={`underline`}
          fontSize={{ base: `xs`, lg: `xs` }}
          fontWeight={`medium`}
          cursor={`pointer`}
          onClick={onOpen}
          as={`span`}
        >
          Inspiration & Reference
        </Text>
        <Text
          borderLeft={`1px solid grey`}
          pl={2}
          textTransform={`capitalize`}
          fontWeight={`medium`}
          fontSize={{ base: `xs`, lg: `xs` }}
        >
          &copy;
          {new Date().getFullYear()} me
        </Text>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerContent
          display={`flex`}
          flexDir={`column`}
          justifyContent={`space-between`}
          alignItems={`end`}
          overflow={`scroll`}
          bg={colorMode == `light` ? `darkBg` : `lightBg`}
          w={{ base: `100%`, lg: `60%`, xl: `50%` }}
          h={{ base: `90vh`, sm: `50%` }}
          padding={`1.5em`}
          color={colorMode == `dark` ? `darkBg` : `lightBg`}
        >
          <Flex
            flexDir={{ base: `column`, md: `row` }}
            // h={`100%`}
            p={3}
            gap={3}
          >
            <Box textAlign={`center`} flex={1}>
              <Text className='font-display'>
                Reference
              </Text>
              <Text fontSize={`xs`}>
                There are many excellent resources on the
                Internet; I used a few of them in the
                creation of this project. You could have a
                look at them.
              </Text>
              <UnorderedList
                display={`flex`}
                flexDir={`column`}
                alignItems={`center`}
                m={`1em 0`}
                styleType={`none`}
                gap={3}
              >
                <Link
                  color={`blue`}
                  href={`https://icons8.com/`}
                >
                  <ListItem  sx={tag}>
                    Icon8
                  </ListItem>
                </Link>
                <Link
                  color={`blue`}
                  href={`https://greensock.com/`}
                >
                  <ListItem  sx={tag}>
                    Gsap
                  </ListItem>
                </Link>
                <Link
                  color={`blue`}
                  href={`https://www.pngegg.com/`}
                >
                  <ListItem  sx={tag}>
                    PNGegg
                  </ListItem>
                </Link>
                <Link
                  color={`blue`}
                  href={`https://fonts.google.com/`}
                >
                  <ListItem  sx={tag}>
                    Google Fonts
                  </ListItem>
                </Link>
                <Link
                  color={`blue`}
                  href={`https://www.chartjs.org/`}
                >
                  <ListItem  sx={tag}>
                    Chartjs
                  </ListItem>
                </Link>
              </UnorderedList>
            </Box>
            {/* <Box flex={1}>
              <Text className='font-display'>Credit</Text>
              <Text fontSize={`xs`}>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Facere magnam eum quo
                molestiae tenetur, voluptatum deleniti
                deserunt aut architecto hic quae
                reprehenderit mollitia ea quos, odio
                temporibus quaerat adipisci nemo?
              </Text>
              <UnorderedList m={0} styleType={`none`}>
                <Link color={`blue`} href={``}>
                  <ListItem  my={2} sx={tag} fontSize={`sm`}>
                    https://icons8.com/
                  </ListItem>
                </Link>
                <Link color={`blue`} href={``}>
                  <ListItem  my={2} sx={tag} fontSize={`sm`}>
                    Consectetur adipiscing elit
                  </ListItem>
                </Link>
                <Link color={`blue`} href={``}>
                  <ListItem  my={2} sx={tag} fontSize={`sm`}>
                    Integer molestie lorem at massa
                  </ListItem>
                </Link>
                <Link color={`blue`} href={``}>
                  <ListItem  my={2} sx={tag} fontSize={`sm`}>
                    Facilisis in pretium nisl aliquet
                  </ListItem>
                </Link>
              </UnorderedList>
            </Box> */}
          </Flex>
          <Text
            pl={2}
            textTransform={`capitalize`}
            fontWeight={`medium`}
            fontSize={{ base: `xs`, lg: `xs` }}
          >
            &copy;
            {new Date().getFullYear()} me
          </Text>
        </DrawerContent>
      </Drawer>
    </>
  );
}
