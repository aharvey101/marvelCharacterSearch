import Enzyme, { mount, ReactWrapper } from 'enzyme'
import axios, { AxiosStatic } from 'axios'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Home from '../pages/index'
import { ISearch } from '../components/Search'
import { Search } from '../components/Search'
import { results } from '../resultsExample'
import characterSearch from '../util/searchAPI'

Enzyme.configure({ adapter: new Adapter() })

const mockSearchProps: ISearch = {
  handleSearch: jest.fn(),
  suggestions: ['test', 'test2'],
}

const data = { data: { data: results.data.results } }
jest.mock('../util/searchAPI', () => ({
  characterSearch: jest.fn(
    () => new Promise((resolve) => resolve({ test: 'test' }))
  ),
}))

jest.mock('axios')
describe('Index', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = mount(
      <Home>
        <Search {...mockSearchProps} />
      </Home>
    )
  })

  it('renders', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Does not call API when input is empty', () => {
    wrapper.find('input').simulate('change', { target: { value: '' } })
    wrapper.find('button').simulate('submit')
    expect(axios.get).toBeCalledTimes(0)
  })

  xit('Calls API and updates state', async () => {
    wrapper.find('input').simulate('change', { target: { value: 'spiderman' } })
    wrapper.find('button').simulate('submit')
    // expect().toHaveBeenCalled()
  })
})
