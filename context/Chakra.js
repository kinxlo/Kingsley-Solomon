// e.g. src/Chakra.js
// a) import `ChakraProvider` component as well as the storageManagers
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from '@chakra-ui/react'
import { customTheme } from '../theme/customTheme.js'



export function Chakra({ cookies, children }) {
    // b) Pass `colorModeManager` prop
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager

    return (
        <ChakraProvider theme={customTheme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
    return {
        props: {
            // first time users will not have any cookies and you may not return
            // undefined here, hence ?? is necessary
            cookies: req.headers.cookie ?? '',
        },
    }
}