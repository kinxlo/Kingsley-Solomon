import Head from "next/head";
import "../styles/globals.scss";
import "../axios/global.js";
import { Chakra } from "../context/Chakra";
import AppContextProvider from "../context/AppContext";
import { useEffect, useState } from "react";
// import { Cursor, Pointer, initializeCanvas } from "custom-curses";
// const { Cursor, Pointer, initializeCanvas } = require("custom-curses");

export default function MyApp({ Component, pageProps }) {
  // const [objects] = useState([]);
  // const [pointers] = useState({
  //   pointer1: new Pointer(
  //     { pointerShape: ["string", "👆"], size: 100, drag: 0.1, xOffset: 15 },
  //     objects
  //   ),
  //   pointer2: new Pointer(
  //     { pointerShape: ["string", "👆"], size: 100, drag: 0.1, xOffset: 15 },
  //     objects
  //   ),
  //   pointer3: new Pointer(
  //     { pointerShape: ["string", "👆"], size: 100, drag: 0.1, xOffset: 15 },
  //     objects
  //   ),
  // });
  //   let objects = []
  // const pointer1 = new Pointer({pointerShape: ['string', '👆'],size: 100,drag: 0.1, xOffset: 15}, objects)
  // const pointer2 = new Pointer({pointerShape: ['string', '😲'],size: 20,drag: 0.9, xOffset:100, yOffset: 50}, objects)
  // const pointer3 = new Pointer({pointerShape: ['string', '༼ つ ◕_◕ ༽つ'], size: 20, drag: 0.97,  Offset:100,y Offset: 50}, objects)
  // const cursor1 = new Cursor({pointers: [pointer1, pointer2, pointer3],drag: 0, //where 1 is maxhideMouse: true,});
  // let canvasObject = initializeCanvas(cursor1, objects);
  // useEffect(() => {
  //   const cursor1 = new Cursor({
  //     pointers: [pointers.pointer1, pointers.pointer2, pointers.pointer3],
  //   });
  //   let canvasObject  = initializeCanvas(cursor1, objects);
  // });

  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        <title>Kingsley Solomon</title>
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </Chakra>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../context/Chakra";
