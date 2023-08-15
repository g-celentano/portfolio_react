import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f2f4f8', '#0a1d2b')(props),
      color: mode('#1a1a1a', '#d1d9e6')(props),
      minWidth: '100dvw',
      minHeight: '100dvh',
      overflowX: 'hidden',
      transition:
        'background 0.1s ease-in, background-color 0.1s ease-in, color 0.1s ease in'
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
        textDecoration: 'underline',
        textUnderlineOffset: 5,
        textDecorationThickness: 5,
        textAlign: 'left'
      },
      workTitle: props => ({
        color: mode('#1a1a1a', '#d1d9e6')(props),
        width: 'full',
        textDecoration: 'none',
        textAlign: 'left'
      })
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
    }),
    variants: {
      contactLink: {
        fontSize: {
          md: 22,
          base: 18
        },
        width: 'min-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 3,
        _hover: {
          color: '#ff6e00',
          fontWeight: 'bold'
        }
      }
    }
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
        width: {
          md: '60px',
          base: '50px'
        },
        lineHeigt: 1,
        fontWeight: 'bold',
        fontSize: {
          md: 22.5,
          base: 18
        }
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
  useSystemColoMode: true,
  disableTransitionOnChange: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts
})

export default theme
