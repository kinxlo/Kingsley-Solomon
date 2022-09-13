import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

// console.log();
export const customTheme = extendTheme({

    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1440px',
    },

    colors: {
        accent: `#800000`,
        active: `#00E1D9`,
        bg: `#000`,
        darkBg:`#101820FF`,
        lightBg:`#FCF6F5FF`,
        overlay:`hsl(0, 20%, 50%)`,
        overlayProjectMobile:`hsl(178, 20%, 50%)`,
        overlayProfile:`hsl(0, 60%, 50%)`
    },

    styles: {
        global: (props) => ({
            body: {
                bg: mode('lightBg', 'darkBg')(props),
                color: mode('darkBg', 'lightBg')(props)
            },
        }),
    },
})