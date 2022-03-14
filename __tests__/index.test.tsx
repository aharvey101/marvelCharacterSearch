import Enzyme, { mount, ReactWrapper } from 'enzyme'
import axios, { AxiosStatic } from 'axios'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Home from '../pages/index'
import { ISearch } from '../components/Search'
import { Search } from '../components/Search'
import { results } from '../resultsExample'
import { act } from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

const mockSearchProps: ISearch = {
  handleSearch: jest.fn(),
}

const data = { data: { data: results.data.results } }

jest.mock('axios')
describe('first', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
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

  it('Calls API and updates state', async () => {
    await (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(data)
    )
    act(() => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'spiderman' } })
    })
    act(() => {
      wrapper.find('button').simulate('submit')
    })

    expect(axios.get).toHaveBeenCalled()
  })
})
