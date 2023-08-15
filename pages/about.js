import {
  Container,
  Image,
  Text,
  useColorModeValue,
  Heading,
  Flex,
  Link,
  Icon
} from '@chakra-ui/react'
import AnimatedText from '../components/animated_text.js'
import { useEffect, useState } from 'react'
import { TiContacts } from 'react-icons/ti'
import { TfiEmail } from 'react-icons/tfi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
  const [cardTextOpacity, setCardTextOpacity] = useState(0)
  const [moreTextOpacity, setMoreTextOpacity] = useState(0.0)
  const [bioOpacity, setBioOpacity] = useState(0.0)

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const moreText = document.querySelector('#moreText')
    if (moreText) {
      const moreOpacity = 0.2 + ((1 - 0.2) / moreText.offsetHeight) * winScroll
      setMoreTextOpacity(moreOpacity)
    }
    const bio = document.querySelector('#bio')
    if (bio) {
      const bioOpacity =
        0.2 +
        ((1 - 0.2) / (bio.offsetHeight + moreText.offsetHeight / 2)) * winScroll
      setBioOpacity(bioOpacity)
    }
  }

  useEffect(() => {
    if (!window.matchMedia('(max-width: 30em)')) {
      setCardTextOpacity(1)
      setMoreTextOpacity(0.2)
      setBioOpacity(0.2)
      window.addEventListener('scroll', listenToScroll)
      return () => window.removeEventListener('scroll', listenToScroll)
    } else {
      setCardTextOpacity(1)
      setMoreTextOpacity(1)
      setBioOpacity(1)
    }
  }, [])

  return (
    <Container maxW="full">
      {/* //!WELCOME CONTAINER */}
      <Container
        variant="customCard"
        maxW={{
          md: 'container.md',
          base: 'container.sm'
        }}
        padding={10}
        marginTop={50}
      >
        <AnimatedText />
        <Text
          opacity={cardTextOpacity}
          overflow="hidden"
          transition="max-height 0.2s ease-in, opacity 0.2s ease-in"
          textAlign="justify"
          fontSize={{
            md: 22.5,
            base: 20
          }}
        >
          Hey there, I&apos;m Gaetano &#45; your friendly neighborhood
          developer! I love tackling challenges with an open mind and delivering
          solid results. Let&apos;s team up, write some killer code, and make a
          dent in the software universe!
        </Text>
      </Container>
      {/* //!MORE ABOUT ME */}
      <Container
        id="moreText"
        maxW="container.md"
        marginTop={20}
        gap={10}
        opacity={moreTextOpacity}
        transition="opacity 0.05s ease-in"
      >
        <Container
          pointerEvents="none"
          backgroundImage="images/ProfileImage.jpg"
          backgroundPosition="center"
          backgroundRepeat={1}
          backgroundSize="contain"
          float="right"
          margin={2.5}
          marginInline={10}
          borderRadius="50%"
          boxSize={{
            md: '200px',
            base: '100px'
          }}
          border={useColorModeValue(
            '1.5px solid #1a1a1a',
            '1.5px solid #d1d9e6'
          )}
        />
        <Text
          textAlign="justify"
          fontSize={{
            md: 25,
            base: 22
          }}
        >
          Going a bit further...
          <br /> I&apos;d say I see myself as a dedicated and adaptable person,
          always aiming for reliable and focused outcomes. Every task I take on
          is a chance to learn, and I approach it with humility. I thrive on
          embracing challenges with an open mind, which makes adapting to
          different situations a strong suit of mine. <br />
          Communication and collaboration are key to my playbook &#45; I know
          teamwork is the magic ingredient for success. In the realm of software
          development, I&apos;ve got some big goals: honing my technical skills,
          riding the wave of industry trends, and dreaming up innovative
          solutions. I&apos;m all about that collaborative team environment,
          where we can grow together while making a real impact in the software
          world.
        </Text>
      </Container>
      {/* //!TIMELINE */}
      <Container
        id="bio"
        maxW="container.md"
        marginTop={20}
        gap={10}
        opacity={bioOpacity}
        transition="opacity 0.05s ease-in"
      >
        <Heading
          size="lg"
          variant="title"
          maxW="full"
          textAlign="left"
          marginBlock={5}
        >
          From Then to Now
        </Heading>
        <Flex dir="row" gap="1em">
          <Text variant="bioYear">1999</Text>
          <Text flex={1}> Born in Naples - IT</Text>
        </Flex>
        <Flex dir="row" gap="1em">
          <Text variant="bioYear">2018</Text>
          <Text flex={1}>High school graduate as a computer technician</Text>
        </Flex>
        <Flex dir="row" gap="1em">
          <Text variant="bioYear">2023</Text>
          <Text flex={1}>Bachelor degree as IT Engineer</Text>
        </Flex>
        <Flex dir="row" gap="1em">
          <Text variant="bioYear">2022-23</Text>
          <Text flex={1}>
            Student @ Apple Developer Academy&lt;Unina Federico II&gt;
          </Text>
        </Flex>
      </Container>
      {/* //! CONTACTS */}
      <Container
        opacity={bioOpacity}
        transition="opacity 0.05s ease-in"
        variant="customCard"
        marginTop={20}
        width={{
          md: 'xl',
          base: 'md'
        }}
        alignItems="flex-start"
        justifyContent="flex-start"
        py={7}
        px={14}
      >
        <Flex
          dir="row"
          justifyContent="space-between"
          alignItems="flex-start"
          width="full"
        >
          <Heading size="lg" variant="title" pb={7}>
            Contacts
          </Heading>
          <Icon
            as={TiContacts}
            fontSize={{
              md: 50,
              base: 25
            }}
            color="#ff6e00"
          />
        </Flex>
        <Link variant="contactLink" href="mailto:gaetano99celentano@gmail.com">
          <Icon
            as={TfiEmail}
            fontSize={{
              md: 25,
              base: 22
            }}
          />
          Email
        </Link>
        <Link
          variant="contactLink"
          href="https://www.linkedin.com/in/gaetano-celentano/"
        >
          <Icon
            as={FaLinkedin}
            fontSize={{
              md: 25,
              base: 22
            }}
          />
          LinkedIn
        </Link>
        <Link variant="contactLink" href="https://github.com/g-celentano">
          <Icon
            as={FaGithub}
            fontSize={{
              md: 25,
              base: 22
            }}
          />
          GitHub
        </Link>
      </Container>
    </Container>
  )
}

export default About
