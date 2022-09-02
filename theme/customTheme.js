import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

// console.log();
export const customTheme = extendTheme({

    config: {
        initialColorMode: 'system',
        useSystemColorMode: false,
    },

    colors: {
        accent: `#f09491`,
        active: `#d000ff`,
        lightBg: `#111111`,
        darkBg: `#ffffff`,
    },

    styles: {
        global: (props) => ({
            body: {
                bg: mode('darkBg', 'lightBg')(props),
                color: mode('lightBg', 'darkBg')(props)
            },
        }),
    },
})

export const darkSticker = {
    opacity: `5%`,
};
export const lightSticker = {
    opacity: `10%`,
};

export function darkStickerFunc(content) {
    return {
        content: `'${content}'`,
        opacity: `5%`,
    }
};

export function lightStickerFunc(content) {
    return {
        content: `'${content}'`,
        opacity: `10%`,
    }
};