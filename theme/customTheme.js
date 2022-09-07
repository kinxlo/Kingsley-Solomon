import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

// console.log();
export const customTheme = extendTheme({

    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1400px',
    },

    colors: {
        accent: `#800000`,
        active: `#00E1D9`,
        bg: `#000`,
        darkBg:`#101820FF`,
        lightBg:`#FCF6F5FF`,
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

// export const darkSticker = {
//     opacity: `5%`,
// };
// export const lightSticker = {
//     opacity: `10%`,
// };

// export function darkStickerFunc(content) {
//     return {
//         content: `'${content}'`,
//         opacity: `5%`,
//     }
// };

// export function lightStickerFunc(content) {
//     return {
//         content: `'${content}'`,
//         opacity: `10%`,
//     }
// };