import Enzyme, { mount, ReactWrapper } from 'enzyme'
import { Cards } from './Results'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  characters: {
    id: 1,
    name: 'TestName',
    description: 'This is some test description',
    modified: '1/10/1993',
  },
}

describe('<Results/>', () => {
  let wrapper

  beforeEach(() => {})

  it('is true', () => {
    expect(true).toBe(true)
  })
})
