import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'jest-fetch-mock'

import * as actions from './actions'
import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  SET_SEARCH_TERM,
} from './constants'

const mockStore = configureMockStore([thunk])

describe('setSearchTermAction', () => {
  const setSearchTermAction = actions.setSearchTermAction

  it('should create an action to set the search term', () => {
    const term = 'test'
    const expectedAction = {
      type: SET_SEARCH_TERM,
      payload: term,
    }

    expect(setSearchTermAction(term)).toEqual(expectedAction)
  })
})

describe('requestRobotsAction', () => {
  const testRobot = {
    id: 1,
    name: 'John',
    email: 'j@email.com',
  }
  const testError = new Error('test error')
  const requestRobotsAction = actions.requestRobotsAction

  fetchMock.enableMocks() // ideally should be in setupTests file

  const store = mockStore({})

  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should dispatch an action to request robots', () => {
    fetchMock.mockResponseOnce(JSON.stringify(testRobot))

    store.dispatch(requestRobotsAction())

    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    }
    const actions = store.getActions()
    expect(actions[0]).toEqual(expectedAction)
  })

  it('should work with fetch api call - success case', (done) => {
    // setup
    fetchMock.mockResponseOnce(JSON.stringify(testRobot))

    // act
    store.dispatch(requestRobotsAction())

    // assert
    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: testRobot,
    }
    const actualAction = store.getActions()[1]

    expect(actualAction).toEqual(expectedAction)

    done()
  })

  // WHY IS THIS NOT WORKING?
  //   it('should work with fetch api call - error case', (done) => {
  //     // setup
  //     // fetch = jest.fn().mockRejectedValue(testError)
  //     fetchMock.mockRejectOnce(testError)

  //     // act
  //     store.dispatch(requestRobotsAction())

  //     // assert
  //     const expectedAction = {
  //       type: REQUEST_ROBOTS_FAILED,
  //       payload: testError,
  //     }
  //     const actualAction = store.getActions()[1]

  //     expect(actualAction).toEqual(expectedAction)

  //     done()
  //   })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
