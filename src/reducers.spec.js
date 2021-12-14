import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  SET_SEARCH_TERM,
} from './constants'
import * as reducers from './reducers'

describe('searchTermReducer', () => {
  const initialState = {
    searchTerm: '',
  }

  const searchTermReducer = reducers.searchTermReducer

  it('should return the initial search state', () => {
    expect(searchTermReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_SEARCH_TERM', () => {
    expect(
      searchTermReducer(initialState, {
        type: SET_SEARCH_TERM,
        payload: 'test',
      }),
    ).toEqual({
      searchTerm: 'test',
    })
  })
})

describe('requestRobotsReducer', () => {
  const initialState = {
    isPending: false,
    robots: [],
    error: '',
  }
  const requestRobotsReducer = reducers.requestRobotsReducer

  it('should return the initial state', () => {
    expect(requestRobotsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      requestRobotsReducer(initialState, {
        type: REQUEST_ROBOTS_PENDING,
      }),
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      requestRobotsReducer(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'a@email.com',
          },
        ],
      }),
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'a@email.com',
        },
      ],
      error: '',
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      requestRobotsReducer(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'error',
      }),
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'error',
    })
  })
})
