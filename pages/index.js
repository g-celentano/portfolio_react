import { Box, Container, Link } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="tomato" p={3} mb={6}>
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
      </Box>
    </Container>
  )
}

export default Page
