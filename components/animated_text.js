import { Box } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

const AnimatedText = () => {
  return (
    <Box
      fontFamily="'JetBrains Mono', monospace"
      fontSize={{
        xl: '28px',
        md: '24px',
        sm: '20px',
        base: '16px'
      }}
      fontWeight="bold"
    >
      <Typewriter
        options={{
          strings: [
            'print("Hello World!");',
            'cout<<"Hello World!";',
            'console.log("Hello World")'
          ],
          autoStart: true,
          loop: true,
          delay: 75
        }}
      />
    </Box>
  )
}

export default AnimatedText
