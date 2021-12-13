import React from 'react'
import CardList from './CardList'
import renderer from 'react-test-renderer'

const mockRobots = [
  {
    id: 1,
    name: 'John Snow',
    username: 'John',
    email: 'js@mail.com',
  },
]

it('renders without crashing', () => {
  const tree = renderer.create(<CardList robots={mockRobots} />).toJSON()

  expect.assertions(1)
  expect(tree).toMatchSnapshot()
})
