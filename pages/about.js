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

const About = () => {
  const [cardWidth, setCardWidth] = useState({
    md: 'xl',
    base: 'md'
  })
  const [cardTextHeight, setCardTextHeight] = useState(0)
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
    setTimeout(() => {
      setCardWidth({
        md: 'container.md',
        base: 'container.sm'
      })
    }, 2400)
    setTimeout(() => {
      setCardTextHeight(1000)
      setTimeout(() => {
        setCardTextOpacity(1)
        setMoreTextOpacity(0.2)
        setBioOpacity(0.2)
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
      }, 200)
    }, 2700)
  }, [])

  return (
    <Container maxW="full">
      {/* //!WELCOME CONTAINER */}
      <Container
        variant="customCard"
        maxW={cardWidth}
        padding={10}
        marginTop={50}
      >
        <AnimatedText />
        <Text
          fontSize={{
            md: '22px',
            sm: '18px',
            base: '14px'
          }}
          maxH={cardTextHeight}
          opacity={cardTextOpacity}
          overflow="hidden"
          transition="max-height 0.2s ease-in, opacity 0.2s ease-in"
          textAlign="justify"
        >
          Hey there, I'm Gaetano &#45; your friendly neighborhood developer! I
          love tackling challenges with an open mind and delivering solid
          results. Let's team up, write some killer code, and make a dent in the
          software universe!
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
        <Image
          src="images/ProfileImage.jpg"
          alt="Gaetano Celentano"
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
          fontSize={{
            md: '22px',
            sm: '18px',
            base: '14px'
          }}
          textAlign="justify"
        >
          Going a bit further...
          <br /> I'd say I see myself as a dedicated and adaptable person,
          always aiming for reliable and focused outcomes. Every task I take on
          is a chance to learn, and I approach it with humility. I thrive on
          embracing challenges with an open mind, which makes adapting to
          different situations a strong suit of mine. <br />
          Communication and collaboration are key to my playbook &#45; I know
          teamwork is the magic ingredient for success. In the realm of software
          development, I've got some big goals: honing my technical skills,
          riding the wave of industry trends, and dreaming up innovative
          solutions. I'm all about that collaborative team environment, where we
          can grow together while making a real impact in the software world.
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
        <Heading variant="title" maxW="full" textAlign="left" marginBlock={5}>
          From Then to Now
        </Heading>
        <Flex dir="row" gap={4}>
          <Text variant="bioYear">1999</Text>
          <Text> Born in Naples - IT</Text>
        </Flex>
        <Flex dir="row" gap={4}>
          <Text variant="bioYear">2018</Text>
          <Text>High school graduate as a computer technician</Text>
        </Flex>
        <Flex dir="row" gap={4}>
          <Text variant="bioYear">2023</Text>
          <Text>Bachelor degree as IT Engineer</Text>
        </Flex>
        <Flex dir="row" gap={4}>
          <Text variant="bioYear">2022-23</Text>
          <Text>
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
        pt={7}
        pl={14}
        pr={14}
      >
        <Flex
          dir="row"
          justifyContent="space-between"
          alignItems="flex-start"
          width="full"
        >
          <Heading variant="title" pb={7}>
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
          Email
        </Link>
        <Link
          variant="contactLink"
          href="https://www.linkedin.com/in/gaetano-celentano/"
        >
          LinkedIn
        </Link>
        <Link variant="contactLink" href="https://github.com/g-celentano">
          GitHub
        </Link>
      </Container>
    </Container>
  )
}

export default About
