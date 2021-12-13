import React from 'react'
import { shallow } from 'enzyme'

import renderer from 'react-test-renderer'

import Card from './Card'

describe('Card', () => {
  //   it('expect to render Card component', () => {
  //     const wrapper = shallow(<Card />)
  //     // expect(wrapper.length).toBe(1)
  //     expect(wrapper).toMatchSnapshot()
  //   })
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
