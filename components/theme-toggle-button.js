import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('dark-button', 'light-button')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      /* color="#ff6e00" */
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
