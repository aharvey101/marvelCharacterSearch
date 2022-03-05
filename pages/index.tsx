import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { Title } from '../components/Title'
import { Search } from '../components/Search'
import { Results } from '../components/Results'

interface ICharacter {}

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  return (
    <Container>
      <Title />
      <Search />
      <Results />
    </Container>
  )
}

export default Home
