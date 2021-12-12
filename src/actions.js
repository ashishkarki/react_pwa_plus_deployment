import { SET_SEARCH_TERM } from './constants'

export const setSearchTermAction = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
}

export const requestRobotsAction = () => (dispatch) => {
  console.log('actions.js - requestRobotsAction', dispatch)
  dispatch({
    type: 'REQUEST_ROBOTS_PENDING',
  })

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: 'REQUEST_ROBOTS_SUCCESS',
        payload: data,
      }),
    )
    .catch((error) =>
      dispatch({
        type: 'REQUEST_ROBOTS_FAILED',
        payload: error,
      }),
    )
}
