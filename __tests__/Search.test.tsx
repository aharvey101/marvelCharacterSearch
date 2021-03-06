import Enzyme, { mount, ReactWrapper } from 'enzyme'

import { Search } from '../components/Search'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

const mockHandleSearch = jest.fn((): void => {})

describe('<Search/>', () => {
  let mockProps = {
    handleSearch: mockHandleSearch,
    suggestions: ['spiderman'],
  }
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<Search {...mockProps} />)
  })

  it('renders', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Submits', () => {
    wrapper.find('input').simulate('change', { target: { value: 'spiderman' } })
    wrapper.find('button').simulate('submit')

    expect(mockHandleSearch).toBeCalled()
  })

  it('Updates input with suggestion', () => {
    wrapper.find('input').simulate('change', { target: { value: 'spider' } })
    wrapper.find('li').at(0).simulate('click')
    expect(wrapper.find('input').props().value).toBe('spiderman')
  })
})
