import { Container, Text } from '@chakra-ui/react'
import AnimatedText from '../components/animated_text.js'
import { useEffect, useState } from 'react'

const About = () => {
  const [cardWidth, setCardWidth] = useState('xl')
  const [cardTextHeight, setCardTextHeight] = useState(0)
  const [cardTextOpacity, setCardTextOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCardWidth('container.md')
    }, 2400)
    setTimeout(() => {
      setCardTextHeight(1000)
      setTimeout(() => {
        setCardTextOpacity(1)
      }, 200)
    }, 2700)
  }, [])
  return (
    <Container variant="customCard" maxW={cardWidth} padding={10}>
      <AnimatedText />
      <Text
        fontSize={{
          xl: '24px',
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
        Hey there, I'm Gaetano – your friendly neighborhood coder! I love
        tackling challenges with an open mind and delivering solid results.
        Let's team up, write some killer code, and make a dent in the software
        universe!
      </Text>
    </Container>
  )
}

export default About
