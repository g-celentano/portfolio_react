import { Box } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

const AnimatedText = () => {
  return (
    <Box
      fontFamily="'JetBrains Mono', monospace"
      fontSize={{
        md: '24px',
        base: '22px'
      }}
      fontWeight="bold"
      maxH={{
        md: '4rem',
        base: '2rem'
      }}
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
