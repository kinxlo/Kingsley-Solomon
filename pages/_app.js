import Head from 'next/head'
import '../styles/globals.scss'
import '../axios/global.js'
import { ChakraProvider } from '@chakra-ui/react'
import AppContextProvider from '../context/AppContext';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider >
      <Head>
        <title>Kingsley Solomon</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}
