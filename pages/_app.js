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
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  )
}
