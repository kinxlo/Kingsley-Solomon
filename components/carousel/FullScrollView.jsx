import React from 'react';
import ProductivityLayout from '../startMenu/ProductivityLayout';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactFullpage from '@fullpage/react-fullpage';

const FullScrollView = ({ children }) => {
  return (
    <ReactFullpage
      //fullpage options
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
