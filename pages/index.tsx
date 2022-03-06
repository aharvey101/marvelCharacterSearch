import type { NextPage } from 'next'
import { Container, Row } from 'react-bootstrap'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import CryptoJS from 'crypto-js'
import { Title } from '../components/Title'
import { Search } from '../components/Search'
import { Cards } from '../components/Results'

const Home: NextPage = () => {
  const [characters, setCharacters] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const url = process.env.marvelEndpoint || ''

  const ts = Date.now()
  const hash = CryptoJS.MD5(
    `${ts}${process.env.privateApiKey}${process.env.publicApiKey}`
  ).toString()

  const handleSearch = (searchParam: string) => {
    if (searchParam === '') {
      setCharacters(undefined)
      return
    }
    setIsLoading(true)
    axios
      .get(url, {
        params: {
          ts: ts,
          apikey: process.env.publicApiKey,
          hash,
          nameStartsWith: searchParam,
        },
        headers: {
          Accept: '*/*',
        },
      })
      .then((res: AxiosResponse) => {
        setCharacters(res.data.data.results)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <Title />
      <Search handleSearch={handleSearch} />
      <Cards isLoading={isLoading} characters={characters} />
    </Container>
  )
}

export default Home
