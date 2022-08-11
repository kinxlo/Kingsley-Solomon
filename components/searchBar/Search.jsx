import {
  Menu,
  Icon,
  MenuButton,
  MenuList,
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
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { axiosInstance } from '../../axios/global';
import MediaResultDisplay from './MediaResultDisplay';
import SearchResultDisplay from './SearchResultDisplay';
import ReactPlayer from 'react-player';
import NewsResultDisplay from './NewsResultDisplay';
import Fillers from '../Fillers';
import Loader from '../Loader';

const Start = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
    const url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}`;
    const res = await axiosInstance.get(url);
    if (res.status === 200) {
      setLoading(false);
      setSearchResult([...res.data.results]);
      console.log(res.data);
    }
  };

  const handleClick = async (e) => {
    setLoading(true);
    const category = e.currentTarget.value;
    const url = `https://google-search3.p.rapidapi.com/api/v1/${category}/q=${searchValue}`;
    const res = await axiosInstance.get(url);

    if (res.status === 200) {
      setLoading(false);
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

  return (
    <Menu placement={`top`} gutter={12}>
      <MenuButton marginX={`1rem`}>
        <Icon
          display={`block`}
          as={MdSearch}
          w={{ base: `4`, sm: `6` }}
          h={{ base: `4`, sm: `6` }}
        />
      </MenuButton>
      <MenuList
        display={`flex`}
        flexDir={`column`}
        justifyContent={`end`}
        borderRadius={0}
        className='theme'
        p={0}
        width={`45rem`}
        minW={{ base: `100vw`, sm: `45rem` }}
        height={{ base: `100vh`, sm: `45rem` }}
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
              <Flex>
                <Tab value={`search`} onClick={handleClick}>
                  All
                </Tab>
                <Tab value={`image`} onClick={handleClick}>
                  Images
                </Tab>
                <Tab value={`news`} onClick={handleClick}>
                  News
                </Tab>
                <Tab value={`video`} onClick={handleClick}>
                  Videos
                </Tab>
              </Flex>
              <Flex>{isLoading ? <Loader /> : null}</Flex>
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
                    image={searchFillers.imageSearch.image}
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
                      text={searchFillers.videoSearch.text}
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
      </MenuList>
    </Menu>
  );
};

export default Start;
