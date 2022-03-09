import Enzyme, { mount } from 'enzyme'
import { Title } from './Title'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('<Title/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Title />)
  })

  it('renders', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
