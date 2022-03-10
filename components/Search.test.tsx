import Enzyme, { mount, ReactWrapper } from 'enzyme'
import { Search } from './Search'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

const mockHandleSearch = jest.fn((): void => {})

describe('<Search/>', () => {
  let mockProps = {
    handleSearch: mockHandleSearch,
  }
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<Search {...mockProps} />)
  })

  it('renders', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Sets the character', () => {
    wrapper.find('input').simulate('change', { target: { value: 'spiderman' } })
    wrapper.find('button').simulate('submit')

    expect(mockHandleSearch).toBeCalled()
  })
})
