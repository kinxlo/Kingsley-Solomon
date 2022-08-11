import Head from 'next/head'
import '../styles/globals.scss'
import '../styles/Calendar.css';
import { ChakraProvider } from '@chakra-ui/react'
import '../axios/global.js'
import AppContextProvider from '../context/AppContext';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <AppContextProvider>
        <Head>
          <title>Kingsley Solomon</title>
          <meta name="description" content="Portfolio" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppContextProvider>

    </ChakraProvider>
  )
}

export default MyApp