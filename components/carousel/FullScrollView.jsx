import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { AppContext } from '../../context/AppContext';

const FullScrollView = ({ children }) => {
  const { setSkillStickerName } = useContext(AppContext);
  const handleLeave = (destination) => {
    console.log(destination.item);
    let title = destination.item.getAttribute('name');
    setSkillStickerName(title);
  };
  return (
    <ReactFullpage
      //fullpage options
      afterLoad={handleLeave}
      licenseKey={''}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {children}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullScrollView;
