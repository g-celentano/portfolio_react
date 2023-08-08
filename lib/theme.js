import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f2f4f8', '#0a1d2b')(props),
      color: mode('#1a1a1a', '#d1d9e6')(props)
    }
  })
}

const components = {
  Heading: {
    baseStyle: props => ({
      color: {
        base: '#ff6e00',
        md: mode('#1a1a1a', '#d1d9e6')(props)
      },
      textAlign: 'center'
    })
  },
  Link: {
    baseStyle: props => ({
      color: mode('#1a1a1a', '#d1d9e6')(props),
      textUnderlineOffset: 3,
      marginTop: {
        xl: 1,
        lg: 1,
        md: 1.5,
        sm: 2,
        base: 1
      }
    })
  }
}

/* font-family: 'JetBrains Mono', monospace;
font-family: 'Merriweather', serif; */

const fonts = {
  heading: "'Merriweather', serif",
  body: "'Merriweather', serif",
  animation: "'JetBrains Mono', monospace"
}

const config = {
  initialColorMode: 'light',
  useSystemColoMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts
})

export default theme
