import { Container } from '@chakra-ui/react'
import About from './about.js'

const Page = () => {
  return (
    <Container maxW="full" minH="75dvh" display="grid" placeItems="center">
      <About />
    </Container>
  )
}

export default Page
