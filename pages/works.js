import { Container, Heading, Text, Link, Flex, Image } from '@chakra-ui/react'
import Head from 'next/head'

import { FaGithub } from 'react-icons/fa'

const GithubLink = ({ href }) => {
  return (
    <Link variant="contactLink" href={href}>
      <Icon
        as={FaGithub}
        fontSize={{
          md: 25,
          base: 12.5
        }}
      />
      GitHub repo
    </Link>
  )
}

const WorkTitle = ({ projectName, projectImage }) => {
  return (
    <Flex dir="row" alignItems="center" justifyContent="flex-start" gap={10}>
      <Image src=images/{} />
      <Heading size="xl" variant="workTitle">
        {projectName}
      </Heading>
    </Flex>
  )
}

const Works = () => {
  return <Container variant="customCard"></Container>
}

export default Works
