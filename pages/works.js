import {
  Container,
  Heading,
  Text,
  Link,
  Flex,
  Image,
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'

import { FaGithub } from 'react-icons/fa'
import { BiLogoFlutter } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { FiExternalLink } from 'react-icons/fi'

const GithubLink = ({ href }) => {
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
      Github
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

const WorkTitle = ({ projectName, projectImage, icon }) => {
  const imageName = 'images/' + projectImage
  return (
    <Flex dir="row" alignItems="center" justifyContent="flex-start" gap={5}>
      {icon === false ? (
        <Image
          src={imageName}
          alt={projectName}
          boxSize={{
            md: '75px',
            base: '50px'
          }}
          borderRadius="10px"
        />
      ) : (
        <Icon
          as={projectImage}
          boxSize={{
            md: '75px',
            base: '50px'
          }}
        />
      )}
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

const WorkListElement = ({
  projectName,
  projectImage,
  children,
  link,
  icon
}) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      my={10}
      gap={5}
    >
      <Flex
        flexDir={{
          base: 'column',
          sm: 'row'
        }}
        alignItems={{
          base: 'flex-start',
          sm: 'center'
        }}
        justifyContent="space-between"
        w="full"
        px="5%"
      >
        <WorkTitle
          projectImage={projectImage}
          projectName={projectName}
          icon={icon}
        />
        <GithubLink href={link} />
      </Flex>
      {children}
    </Flex>
  )
}

const Works = () => {
  return (
    <Container variant="customCard" maxW="container.lg">
      <WorkListElement
        projectImage={CgWebsite}
        projectName="This Portfolio"
        link="https://github.com/g-celentano/portfolio_react"
        icon={true}
      >
        <Text textAlign="justify" textIndent="5%" px="5%">
          This is the portfolio I made in order to showcase the work I&apos;ve
          be doing over the years. I wanted to make this, other than the
          showcase itself, to learn ReactJS, and how to build a proper website
          with it.
          <br />I also used the opportunity to try my hand a little at design,
          which I usually leave to those in charge. <br />
          As for the interface, it was done using the &quot;Chakra UI&quot;
          library, and as cheat sheet for the usage of the library, I followed
          and took a few lines of code from&nbsp;
          <Link
            href="https://www.craftz.dog/"
            textDecor="underline"
            _hover={{
              color: '#ff6e00',
              fontWeight: 'bold'
            }}
            maxW="min-content"
          >
            Takuya Matsuyama&apos;s site&nbsp;
            <Icon as={FiExternalLink} verticalAlign="baseline" />
          </Link>
        </Text>
      </WorkListElement>
      <WorkListElement
        projectImage="WhooshImage.png"
        projectName="Whoosh"
        link="https://github.com/g-celentano/GameWizard"
        icon={false}
      >
        <Text textAlign="justify" textIndent="5%" px="5%">
          <b>Whoosh</b> is a personal assistant that, through a message-based
          query, can recommend you games based on interest or similar games that
          you tell them. This whole process is made possible thanks to a Machine
          Learning model that checks a database of games and returns the most
          compatible with your taste. <br />
          <br />
          The team that worked on this project consisted of 2 coders (one of
          which is me), 2 designers and a PM. Within the timespan of 1 month, we
          managed to make a MVP that could recognize natural language and
          recommend iOS games fairly accurately. Unfortunately APIs needed to
          launch this app on the App Store were not provided and we decided to
          pause the project.
          <br />
          <br /> The design choice was for a 8-bit style, with a magical cat as
          a mascotte, with dialogues and expressions coherent with the
          character. <br />
          <br />
          The AI part is about a little neural network to help the bot
          understand what the user is saying, with the addition of a uncomplete
          NLP process (because of the absence of the required APIs) that should
          be the responsible for the semantic analysis, helpful for
          understanding at the best the user game requests. <br />
          <br /> Obviously I didn&apos;t do all the work, I worked with other 4
          people: 2 designers, one business oriented person, and another coder.
          What I did in this project, essentially, is: <br /> I mostly curated
          the NN for the messages recognition, and, with the help of the
          designers, the implementation of the UI/UX (some images are visible in
          the Github Repo)
        </Text>
      </WorkListElement>
      <WorkListElement
        projectImage="BNP.png"
        projectName="Buffon's Needles Problem"
        link="https://github.com/g-celentano/Buffons-Needle-Problem"
        icon={false}
      >
        <Text textAlign="justify" textIndent="5%" px="5%">
          This is the project I made to participate, and also be one of the
          winners of <i>Swift Student Challenge 2023</i>, that basically
          explains a math problem: The Buffon&apos;s needles problem. <br />
          <br />
          This problem is essentially a problem that Buffon, a French
          mathematician of the 1700s, solved. He noticed that dividing a surface
          in equal sections, and let an indefinite number of needles drop on
          this surface, the probability for the needles to land of the dividers,
          after a long series of calculation, is related to the number Pi.
          <br /> So actually, if you reverse the formula, and approximate the
          probability for the needles to land on the surface dividers as the
          numbers of needles actually landed on the dividers over the total
          number of landed needles, you can actually calculate the number Pi, as
          accurate as the number of needles grows.
        </Text>
      </WorkListElement>
      <WorkListElement
        projectImage="Sortify.png"
        projectName="Sortify"
        link="https://github.com/g-celentano/Buffons-Needle-Problem"
        icon={false}
      >
        <Text textAlign="justify" textIndent="5%" px="5%">
          <b>Sortify</b> is an application, made during the Apple Acadamey, that
          was meant as project to showcase how muchI understood about sorting
          alghoritms (given that I chose to work with &apos;Algorithms and Data
          Structures&apos;). <br />
          <br />
          It was a &apos;one-week&apos; project, so the algorithms present in
          the app are just the simpler ones. Anyway, I made everything present
          in the app, based on the fact that this is a simple application to
          understand how some of the known sorting algorithms work, with a
          simple explanation and a little animation to show how it&apos;s done.
          <br /> A more in-depth explanation is available in the Github Repo.
        </Text>
      </WorkListElement>
      <WorkListElement
        projectImage="GPR.jpg"
        projectName="Gym Programs Reader"
        link="https://github.com/g-celentano/gym_program_reader"
        icon={false}
      >
        <Text textAlign="justify" textIndent="5%" px="5%">
          This is my go-to project, for when I want to learn something new.
          Essentially the app is a <b>Gym Program Reader</b>, that helps being
          organized during workouts, by showing one exercise at a time, with all
          its info, and with the possibility to set and use a timer.
          <br />
          The timer is the animated piece in this project: basically, I wanted
          to make as big as possible the visibility of how much time is
          remaining for the rest between sets, in order to help the, supposed
          tired, user better read the screen.
          <br /> Current versions:
        </Text>
        <List px="5%">
          <ListItem>
            <Text textAlign="justify" textIndent="1%" px="1%">
              <ListIcon as={BiLogoFlutter} color="#ff6e00" />
              <b>Flutter</b>: made to learn Flutter and Dart for the hybrid
              development. Initially made in august 2022, I decided to remake
              it, in order to refactor the code in a more readable way, using
              the MVVM pattern. <br />
              Being a standalone project done for personal growth reasons, I
              made everything, from the design to the implementation of the app,
              also playing around with animations in flutter.
            </Text>
          </ListItem>
        </List>
      </WorkListElement>
    </Container>
  )
}

export default Works
