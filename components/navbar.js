import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#1a1a1a', '#d1d9e6')

  return (
    /* <NextLink href={href}> */
    <Link
      as={NextLink}
      href={href}
      p={2}
      color={active ? '#ff6e00' : inactiveColor}
    >
      {children}
    </Link>
    /* </NextLink> */
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bgGradient={useColorModeValue(
        'linear(to-b, #E6EAF2, transparent)',
        'linear(to-b, #0E2636, transparent)'
      )}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
      display="flex"
      flexDir="row"
      paddingInline={{
        xl: '48px',
        lg: '32px',
        md: '32px',
        sm: '16px',
        base: '16px'
      }}
      paddingBlock={{
        xl: '16px',
        lg: '12px',
        md: '12px',
        sm: '8px',
        base: '8px'
      }}
      wrap="wrap"
      alignItems="center"
    >
      <Heading
        as="h1"
        fontSize={{
          xl: '36px',
          lg: '30px',
          md: '30px',
          sm: '28px',
          base: '28px'
        }}
      >
        Gaetano Celentano
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        marginRight={2}
        marginLeft={5}
      >
        <LinkItem href="/" path={path}>
          Home
        </LinkItem>
        <LinkItem href="/about" path={path}>
          About
        </LinkItem>
        <LinkItem href="/works" path={path}>
          Works
        </LinkItem>
        <LinkItem href="/contacts" path={path}>
          Contacts
        </LinkItem>
      </Stack>

      <Box flex={1} align="right">
        <ThemeToggleButton />
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
              marginRight={2}
            />
            <MenuList>
              <Link as={NextLink} href="/" passHref>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link as={NextLink} href="/about" passHref>
                <MenuItem>About</MenuItem>
              </Link>
              <Link as={NextLink} href="/works" passHref>
                <MenuItem>Works</MenuItem>
              </Link>
              <Link as={NextLink} href="/contacts" passHref>
                <MenuItem>Contacts</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
