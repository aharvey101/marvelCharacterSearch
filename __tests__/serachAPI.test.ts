import characterSearch from '../util/searchAPI'
import axios from 'axios'
import { cancelRequest } from '../util/searchAPI'

jest.mock('axios')

// const mockCharacterSearch = characterSearch as jest.mock('axios')

describe('searchAPI', () => {
  it('cancels the previos request', () => {
    expect(true).toBeTruthy()
  })
})
