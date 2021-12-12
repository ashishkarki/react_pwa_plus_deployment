import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  SET_SEARCH_TERM,
} from './constants'

const initialStateSearch = {
  searchTerm: '',
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
}

export const searchTermReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    default:
      return state
  }
}

export const requestRobotsReducer = (
  state = initialStateRobots,
  action = {},
) => {
  console.log('requestRobotsReducer, action:', action, state)
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default:
      return state
  }
}
