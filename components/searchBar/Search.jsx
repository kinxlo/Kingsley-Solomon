import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Icon,
  Input,
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Image,
  Text,
  useColorMode,
  Button,
} from '@chakra-ui/react';

import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { axiosInstance } from '../../axios/global';
import MediaResultDisplay from './MediaResultDisplay';
import SearchResultDisplay from './SearchResultDisplay';
import ReactPlayer from 'react-player';
import NewsResultDisplay from './NewsResultDisplay';
import Fillers from '../Fillers';
import { FcSearch } from 'react-icons/fc';
import { GiCog } from 'react-icons/gi';
import { AiOutlineLeft } from 'react-icons/ai';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [imageResult, setImageResult] = useState([]);
  const [newsResult, setNewsResult] = useState([]);
  const [videoResult, setVideoResult] = useState([]);

  const [searchFillers] = useState({
    allSearch: {
      image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1660021208/portfolio/All_the_data-bro_ihhnsy.png`,
      text: `Search`,
    },
    imageSearch: {
      image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1660021208/portfolio/Image_folder-bro_ubutuv.png`,
      text: `Images`,
    },
    newsSearch: {
      image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1660021208/portfolio/Marketing-bro_vwcky8.png`,
      text: `News`,
    },
    videoSearch: {
      image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1660021208/portfolio/Video_files-bro_prcqy3.png`,
      text: `Videos`,
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}`;
    const res = await axiosInstance.get(url);
    if (res.status === 200) {
      setSearchResult([...res.data.results]);
      console.log(res.data);
    }
  };

  const handleClick = async (e) => {
    const category = e.currentTarget.value;
    const url = `https://google-search3.p.rapidapi.com/api/v1/${category}/q=${searchValue}`;
    const res = await axiosInstance.get(url);

    if (res.status === 200) {
      switch (category) {
        case `search`:
          setSearchResult([...res.data.results]);
          break;
        case `image`:
          setImageResult([...res.data.image_results]);
          break;
        case `news`:
          setNewsResult([...res.data.entries]);
          break;
        case `video`:
          setVideoResult([...res.data.results]);
          break;
        default:
          setSearchResult([...res.data.results]);
          break;
      }
    }
  };

  let showSearchResult = searchResult.map(
    (result, index) => {
      return (
        <SearchResultDisplay result={result} key={index} />
      );
    }
  );

  let showImageResult = imageResult.map((result, index) => {
    return (
      <MediaResultDisplay key={index}>
        <Image src={result.image.src} alt='project' />
      </MediaResultDisplay>
    );
  });

  let showNewsResult = newsResult.map((result, index) => {
    return (
      <NewsResultDisplay result={result} key={index} />
    );
  });
  let showVideoResult = videoResult.map((result, index) => {
    return (
      <MediaResultDisplay key={index}>
        <ReactPlayer
          controls={true}
          width={`100%`}
          height={`100%`}
          url={result.link}
        />
      </MediaResultDisplay>
    );
  });

  const handleDialogClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Button
        disabled
        fontWeight={`bold`}
        className='font-mono'
        gap={3}
        display={`flex`}
        alignItems={`center`}
        border={`1px solid`}
        padding={{ base: `5px 20px`, md: `10px 40px` }}
        _hover={{
          color: `rgb(208, 0, 255) !important`,
        }}
        cursor={`pointer`}
        onClick={handleDialogClick}
        fontSize={{ base: `10px`, md: `14px` }}
      >
        Test my search Api <Icon as={GiCog} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        autoFocus={false}
      >
        <DrawerContent
          bg={colorMode == `light` ? `lightBg` : `darkBg`}
          display={`flex`}
          flexDir={`column`}
          justifyContent={`end`}
          borderRadius={0}
          width={`45rem`}
          minW={{ base: `100vw`, md: `45rem` }}
          height={{ base: `100vh`, md: `45rem` }}
          border={0}
          margin={0}
        >
          <Box
            // border={`2px solid red`}
            p={`1rem`}
            width={`100%`}
            height={`100%`}
            overflow={`scroll`}
            className={`hide-scrollbar`}
          >
            <Tabs>
              <TabList
                alignItems={`center`}
                justifyContent={`space-between`}
              >
                {/* back button */}

                <Icon
                  onClick={handleDialogClick}
                  // className={`accent`}
                  boxSize={`1.5rem`}
                  as={AiOutlineLeft}
                />

                <Flex>
                  <Tab
                    value={`search`}
                    onClick={handleClick}
                    // className={`accent`}
                  >
                    All
                  </Tab>
                  <Tab
                    value={`image`}
                    onClick={handleClick}
                    // className={`accent`}
                  >
                    Images
                  </Tab>
                  <Tab
                    value={`news`}
                    onClick={handleClick}
                    // className={`accent`}
                  >
                    News
                  </Tab>
                  <Tab
                    value={`video`}
                    onClick={handleClick}
                    // className={`accent`}
                  >
                    Videos
                  </Tab>
                </Flex>
              </TabList>
              <TabPanels>
                <TabPanel height={`100%`}>
                  {!searchResult.length ? (
                    <Fillers
                      image={searchFillers.allSearch.image}
                      text={searchFillers.allSearch.text}
                    />
                  ) : (
                    showSearchResult
                  )}
                </TabPanel>
                <TabPanel>
                  {!imageResult.length ? (
                    <Fillers
                      image={
                        searchFillers.imageSearch.image
                      }
                      text={searchFillers.imageSearch.text}
                    />
                  ) : (
                    <Flex
                      justifyContent={`space-around`}
                      flexWrap={`wrap`}
                      gap={3}
                    >
                      {showImageResult}
                    </Flex>
                  )}
                </TabPanel>
                <TabPanel>
                  {!newsResult.length ? (
                    <Fillers
                      image={searchFillers.newsSearch.image}
                      text={searchFillers.newsSearch.text}
                    />
                  ) : (
                    showNewsResult
                  )}
                </TabPanel>
                <TabPanel>
                  <Grid
                    templateColumns='repeat(3, 1fr)'
                    gap={3}
                  >
                    {!videoResult.length ? (
                      <Fillers
                        image={
                          searchFillers.videoSearch.image
                        }
                        text={
                          searchFillers.videoSearch.text
                        }
                      />
                    ) : (
                      showVideoResult
                    )}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <form onSubmit={handleSearch}>
            <Flex
              border={`2px solid green`}
              alignItems={`center`}
              background={`#fff`}
              p={`1px`}
            >
              <Icon
                p={3}
                fontSize={`3rem`}
                className={`accent`}
                as={MdSearch}
              />
              <Input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                p={0}
                borderRadius={0}
                focusBorderColor={`none`}
                // className={`accent`}
                color={`#000`}
                variant={`filled`}
                background={`transparent`}
                placeholder={`Type here to search`}
              />
            </Flex>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
