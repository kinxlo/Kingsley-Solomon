import Head from 'next/head'
import '../styles/globals.scss'
import '../axios/global.js'
import { Chakra } from './Chakra'
import AppContextProvider from '../context/AppContext';
import { Box } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {


  return (
    <Chakra  cookies={pageProps.cookies}>
      <Head>
        <title>Kingsley Solomon</title>
      </Head>
      <AppContextProvider>
        <Component  {...pageProps} />
      </AppContextProvider>
    </Chakra>

  )
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "./Chakra";
