import type { NextPage } from 'next'
import { Container, Row } from 'react-bootstrap'

import { useState, useEffect } from 'react'

import { Title } from '../components/Title'
import { Search } from '../components/Search'
import { Cards } from '../components/Results'
import characterSearch from '../util/searchAPI'
import characterNames from '../util/characterNames'

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<any>([])
  const [noCharacters, setNoCharacters] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (searchParam: string) => {
    if (searchParam === '') {
      setCharacters([])
      setNoCharacters(false)
      return
    }
    setIsLoading(true)
    try {
      const characters = await characterSearch(searchParam)
      characters.length <= 0 ? setNoCharacters(true) : setNoCharacters(false)
      setCharacters(characters)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Title />
      <Search
        handleSearch={handleSearch}
        suggestions={characterNames(characters)}
      />
      <Cards
        noCharacters={noCharacters}
        isLoading={isLoading}
        characters={characters}
      />
    </Container>
  )
}

export default Home
