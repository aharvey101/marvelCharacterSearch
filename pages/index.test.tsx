import Enzyme, { mount, ReactWrapper } from 'enzyme'
import axios, { AxiosStatic } from 'axios'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Home from './index'
import { Search } from '../components/Search'

Enzyme.configure({ adapter: new Adapter() })

const mockSearchProps = {
  handleSearch: jest.fn((searchParam): void => {}),
}

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
  })

  it('Calls API', () => {
    ;(axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({}))
    wrapper.find('input').simulate('change', { target: { value: 'spiderman' } })
    wrapper.find('button').simulate('submit')
    expect(axios.get).toHaveBeenCalled()
  })
})
