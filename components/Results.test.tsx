import Enzyme, { mount } from 'enzyme'
import { Cards } from './Results'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { results } from '../resultsExample'
Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  characters: results.data.results,
  isLoading: false,
}

describe('<Results/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Cards {...mockProps} />)
  })

  it('is true', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Shows the modal when clicked', () => {
    wrapper.find({ variant: 'primary' }).at(0).simulate('click')
    expect(
      wrapper.find('MyModal').at(0).find({ modalState: true }).exists()
    ).toBe(true)
  })

  it('Closes the modal when close is clicked', () => {
    wrapper.find({ variant: 'primary' }).at(0).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    expect(
      wrapper.find('MyModal').at(0).find({ modalState: false }).exists()
    ).toBe(true)
  })

  it('shows spinner if loading', () => {
    ;(mockProps.isLoading = true), (wrapper = mount(<Cards {...mockProps} />))
    expect(wrapper.find('Spinner').exists()).toBe(true)
  })

  it('shows error when no character found', () => {
    mockProps.characters = []
    mockProps.isLoading = false
    wrapper = mount(<Cards {...mockProps} />)

    expect(wrapper.find('Alert').exists()).toBe(true)
  })
})
