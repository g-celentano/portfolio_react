import {
  Container,
  Image,
  Text,
  useColorModeValue,
  Heading,
  Box
} from '@chakra-ui/react'
import AnimatedText from '../components/animated_text.js'
import { useEffect, useState } from 'react'

const About = () => {
  const [cardWidth, setCardWidth] = useState('xl')
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
      const bioOpacity = 0.2 + ((1 - 0.2) / bio.offsetHeight) * winScroll
      setBioOpacity(bioOpacity)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCardWidth('container.md')
    }, 2400)
    setTimeout(() => {
      setCardTextHeight(1000)
      setTimeout(() => {
        setCardTextOpacity(1)
        setMoreTextOpacity(0.2)
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
      }, 200)
    }, 2700)
  }, [])

  return (
    <Container maxW="full">
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
      <Container
        id="moreText"
        maxW="container.lg"
        marginTop={20}
        gap={10}
        opacity={moreTextOpacity}
        transition="opacity 0.05s ease-in"
      >
        <Image
          src="images/ProfileImage.jpg"
          alt="Gaetano Celentano"
          float="right"
          marginTop={5}
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
          different situations a strong suit of mine.
        </Text>
      </Container>
      <Container
        maxW="container.lg"
        opacity={moreTextOpacity}
        transition="opacity 0.05s ease-in"
      >
        <Text
          fontSize={{
            md: '22px',
            sm: '18px',
            base: '14px'
          }}
          textAlign="justify"
          marginInline="auto"
        >
          Communication and collaboration are key to my playbook &#45; I know
          teamwork is the magic ingredient for success. In the realm of software
          development, I've got some big goals: honing my technical skills,
          riding the wave of industry trends, and dreaming up innovative
          solutions. I'm all about that collaborative team environment, where we
          can grow together while making a real impact in the software world.
        </Text>
      </Container>
      <Container
        id="bio"
        maxW="container.lg"
        marginTop={20}
        gap={10}
        opacity={moreTextOpacity}
        transition="opacity 0.05s ease-in"
        fontSize={{
          md: '18px',
          sm: '16px',
          base: '12px'
        }}
      >
        <Heading variant="title" maxW="full" textAlign="left">
          Bio
        </Heading>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
        >
          <Text variant="bioYear">1999</Text>
          <Text> Born in Naples - IT</Text>
        </Box>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
        >
          <Text variant="bioYear">2018</Text>
          <Text>High school graduate as a computer technician</Text>
        </Box>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
        >
          <Text variant="bioYear">2023</Text>
          <Text>Bachelor degree as IT Engineer</Text>
        </Box>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={4}
        >
          <Text variant="bioYear">2022-23</Text>
          <Text>
            Student @ Apple Developer Academy&lt;Unina Federico II&gt;
          </Text>
        </Box>
      </Container>
    </Container>
  )
}

export default About
