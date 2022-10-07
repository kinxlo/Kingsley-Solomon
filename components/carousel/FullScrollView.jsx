import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { AppContext } from "../../context/AppContext";

const FullScrollView = ({ children }) => {
  const { setProjectInfo } = useContext(AppContext);
  const handleLoad = (origin, destination, direction, trigger) => {
    let info = destination.item.getAttribute("title");

    setProjectInfo(info);
  };

  return (
    <ReactFullpage
      //fullpage options
      // navigation={true}
      verticalCentered={false}
      afterLoad={handleLoad}
      licenseKey={""}
      scrollingSpeed={500} /* Options here */
      render={({ state, fullpageApi }) => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullScrollView;
