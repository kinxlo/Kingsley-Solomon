import Head from 'next/head'
import '../styles/globals.scss'
import '../axios/global.js'
import { ChakraProvider } from '@chakra-ui/react'
import AppContextProvider from '../context/AppContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <Head>
        <title>Kingsley Solomon</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}
