import React from 'react'
import renderer from 'react-test-renderer'

import CounterButton from './CounterButton'

it('renders without crashing', () => {
  const mockColor = 'red'
  const mockOnClick = jest.fn()

  const tree = renderer
    .create(<CounterButton color={mockColor} onClick={mockOnClick} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('correctly increments the counter', () => {
  const mockColor = 'red'

  // setup
  const component = renderer.create(<CounterButton color={mockColor} />)
  const rootInstance = component.root

  // action
  const counterButton = rootInstance.findByType('button')
  //.findByProps({ id: 'counter' })
  counterButton.props.onClick()

  // assertion
  expect(counterButton.props.children).toBeInstanceOf(Object)
  expect(counterButton.props.children).toEqual(['Count: ', 1])
})

it('correctly increments the counter to 5', () => {
  const mockColor = 'red'

  // setup
  const component = renderer.create(<CounterButton color={mockColor} />)
  const rootInstance = component.root

  // action
  const counterButton = rootInstance.find(
    (rootInstance) => rootInstance.type === 'button',
  )
  for (let i = 0; i < 5; i++) {
    counterButton.props.onClick()
  }

  // assertion
  expect(counterButton.props.children).toBeInstanceOf(Object)
  expect(counterButton.props.children).toEqual(['Count: ', 5])
})
