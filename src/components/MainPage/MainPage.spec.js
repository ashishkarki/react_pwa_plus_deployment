import React from 'react'
import MainPage from './MainPage'

import renderer from 'react-test-renderer'

let component = null

beforeEach(() => {
  jest.clearAllMocks()

  const mockProps = {
    searchTerm: '',
    requestRobots: {
      isPending: false,
      robots: [],
    },
    onRequestRobots: jest.fn(),
    onSearchTermChange: jest.fn(),
  }

  component = renderer.create(<MainPage {...mockProps} />)
})

it('renders without crashing', () => {
  expect(component.toJSON()).toMatchSnapshot()
})

it('calls onSearchTermChange when input changes', () => {
  const mockEvent = {
    target: {
      value: 'test',
    },
  }

  const rootInstance = component.root
  const input = rootInstance.findByType('input')
  input.props.onChange(mockEvent)

  expect.assertions(1)
  expect(component.toJSON()).toMatchSnapshot()
})

it('filters robots correctly for empty case', () => {
  const rootInstance = component.root
  const cardListComponent = rootInstance.findByProps({ id: 'cardList' })
  const cardListFilteredRobots = cardListComponent.props.robots

  expect(cardListFilteredRobots).toEqual([])
})

it('filters robots correctly for finding something case', () => {
  const testRobot = {
    id: 1,
    name: 'test',
    email: 'a@email.com',
  }
  const mockProps = {
    searchTerm: 'es',
    requestRobots: {
      isPending: false,
      robots: [testRobot],
    },
    onRequestRobots: jest.fn(),
    onSearchTermChange: jest.fn(),
  }
  component = renderer.create(<MainPage {...mockProps} />)

  const rootInstance = component.root
  const cardListComponent = rootInstance.findByProps({ id: 'cardList' })
  const cardListFilteredRobots = cardListComponent.props.robots

  expect(cardListFilteredRobots).toEqual([testRobot])
})
