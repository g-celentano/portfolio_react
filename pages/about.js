import {
  Container,
  Image,
  Text,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import AnimatedText from '../components/animated_text.js'
import { useEffect, useState } from 'react'

const About = () => {
  const [cardWidth, setCardWidth] = useState('xl')
  const [cardTextHeight, setCardTextHeight] = useState(0)
  const [cardTextOpacity, setCardTextOpacity] = useState(0)
  const [moreTextOpacity, setMoreTextOpacity] = useState(0.0)

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const moreText = document.querySelector('#moreText')
    if (moreText) {
      const newOpacity =
        0.2 +
        ((1 - 0.2) /
          ((document.body.offsetHeight ||
            document.documentElement.offsetHeight) -
            moreText.offsetHeight)) * // study new value here for "just text" opacity
          (winScroll - 0.2)
      console.log(newOpacity)
      setMoreTextOpacity(newOpacity)
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
      }, 200)
    }, 2700)
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
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
        maxW="container.lg"
        marginTop={20}
        gap={10}
        opacity={moreTextOpacity}
        transition="opacity 0.05s ease-in"
      >
        <Heading variant="title">Bio</Heading>
      </Container>
    </Container>
  )
}

export default About
