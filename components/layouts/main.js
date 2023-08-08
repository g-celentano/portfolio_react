import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewwport" content="width=device-width, initial-scale=1" />
        <title>Gaetano Celentano - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="full" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
