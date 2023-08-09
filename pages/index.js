import { Box, Container, Link, grid } from '@chakra-ui/react'
import About from './about.js'

const Page = () => {
  return (
    <Container maxW="full" minH="75dvh" display="grid" placeItems="center">
      {/* <Box borderRadius="lg" bg="tomato" p={3} mb={6}>
        <Link
          href="https://youtu.be/bSMZgXzC9AA?t=2053"
          bg="red"
          color="white"
          p={2}
          borderRadius={'lg'}
          _hover={{ bg: 'blue.200', color: 'black' }}
        >
          DevAsLife tutorial
        </Link>
      </Box> */}
      <About />
    </Container>
  )
}

export default Page
