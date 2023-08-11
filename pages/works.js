import {
  Container,
  Heading,
  Text,
  Link,
  Flex,
  Image,
  Icon
} from '@chakra-ui/react'

import { FaGithub } from 'react-icons/fa'

const GithubLink = ({ href, children }) => {
  return (
    <Link
      variant="contactLink"
      href={href}
      w="max-content"
      fontSize={{
        md: 18,
        base: 18
      }}
    >
      {children ?? 'Github'}
      <Icon
        as={FaGithub}
        fontSize={{
          md: 26,
          base: 22
        }}
      />
    </Link>
  )
}

const WorkTitle = ({ projectName, projectImage }) => {
  const imageName = 'images/' + projectImage
  return (
    <Flex dir="row" alignItems="center" justifyContent="flex-start" gap={5}>
      <Image
        src={imageName}
        boxSize={{
          md: '75px',
          base: '50px'
        }}
        borderRadius="10px"
      />
      <Heading
        size={{
          md: 'xl',
          base: 'lg'
        }}
        variant="workTitle"
      >
        {projectName}
      </Heading>
    </Flex>
  )
}

const WorkListElement = ({ projectName, projectImage, children, link }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      my={10}
      gap={5}
    >
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        px="5%"
      >
        <WorkTitle projectImage={projectImage} projectName={projectName} />
        <GithubLink href={link} />
      </Flex>
      <Text textAlign="justify" textIndent="5%" px="5%">
        {children}
      </Text>
    </Flex>
  )
}

const Works = () => {
  return (
    <Container variant="customCard" maxW="container.lg">
      <WorkListElement
        projectImage="WhooshImage.png"
        projectName="Whoosh"
        link="https://github.com/g-celentano/GameWizard"
      >
        <b>Whoosh</b> is a personal assistant that, through a message-based
        query, can recommend you games based on interest or similar games that
        you tell them. This whole process is made possible thanks to a Machine
        Learning model that checks a database of games and returns the most
        compatible with your taste. <br />
        <br />
        The team that worked on this project consisted of 2 coders (one of which
        is me), 2 designers and a PM. Within the timespan of 1 month, we managed
        to make a MVP that could recognize natural language and recommend iOS
        games fairly accurately. Unfortunately APIs needed to launch this app on
        the App Store were not provided and we decided to pause the project.
        <br />
        <br /> The design choice was for a 8-bit style, with a magical cat as a
        mascotte, with dialogues and expressions coherent with the character.{' '}
        <br />
        <br />
        The AI part is about a little neural network to help the bot understand
        what the user is saying, with the addition of a uncomplete NLP process
        (because of the absence of the required APIs) that should be the
        responsible for the semantic analysis, helpful for understanding at the
        best the user game requests. <br />
        <br /> Obviously I didn't do all the work, I worked with other 4 people:
        2 designers, one business oriented person, and another coder. What I did
        in this project, essentially, is: <br /> I mostly curated the NN for the
        messages recognition, and, with the help of the designers, the
        implementation of the UI/UX (some images are visible in the Github Repo)
      </WorkListElement>
    </Container>
  )
}

export default Works
