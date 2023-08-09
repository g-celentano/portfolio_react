import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f2f4f8', '#0a1d2b')(props),
      color: mode('#1a1a1a', '#d1d9e6')(props),
      minWidth: '100dvw',
      minHeight: '100dvh',
      overflowX: 'hidden'
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
    }),
    variants: {
      title: {
        color: '#ff6e00',
        fontSize: {
          md: '32px',
          base: '28px'
        },
        textDecoration: 'underline',
        textUnderlineOffset: 5,
        textDecorationThickness: 5,
        marginBlock: 5
      }
    }
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
  },
  Container: {
    variants: {
      customCard: props => ({
        color: mode('#1a1a1a', '#d1d9e6')(props),
        bg: mode('#c5cee1', '#0E2636')(props),
        boxShadow: 'xl',
        borderRadius: 'xl',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        justifyContent: 'space-around',
        paddingInline: 'md',
        aspectRatio: 2 / 1,
        marginTop: 'auto',
        marginBottom: 'auto',
        transition: 'max-width 0.3s ease-in'
      })
    }
  },
  Text: {
    variants: {
      bioYear: props => ({
        color: mode('#1a1a1a', '#d1d9e6')(props),
        width: '10%',
        fontWeight: 'bold'
      })
    }
  }
}

/* font-family: 'JetBrains Mono', monospace;
font-family: 'Merriweather', serif; */

const fonts = {
  heading: "'Merriweather', serif",
  body: "'Merriweather', serif"
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
