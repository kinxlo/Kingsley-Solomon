import { extendTheme } from '@chakra-ui/react'
import { globalStyleTheme } from './style'

const config = {
    initialColorMode: 'dark',
}
const overrides = {
    config,
    globalStyleTheme
}

// 3. extend the theme
const theme =  extendTheme(overrides)
export default theme