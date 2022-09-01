import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { customTheme } from '../theme/customTheme.js'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Portfolio" />
                    < link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Nunito+Sans:ital@0;1&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Ubuntu+Condensed&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={customTheme.config.initialColorMode}  />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

