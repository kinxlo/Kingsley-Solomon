import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

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
        bg: `#000`,
        darkBg: `#101820FF`,
        lightBg: `#FCF6F5FF`,
        matrixLight: `#00FF41`,
        matrixDark: `#008F11`,
        overlay: `hsl(0, 20%, 50%)`,
        overlayProjectMobile: `hsl(178, 20%, 50%)`,
        overlayProfile: `hsl(0, 60%, 50%)`
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