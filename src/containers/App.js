import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import { requestRobotsAction, setSearchTermAction } from '../actions'
import MainPage from '../components/MainPage/MainPage'

export const App = () => {
  const { searchTerm } = useSelector((state) => state.searchTerm)
  const requestRobots = useSelector((state) => state.requestRobots)
  const dispatch = useDispatch()

  const onRequestRobots = useCallback(() => dispatch(requestRobotsAction(), []))

  const onSearchTermChange = (event) => {
    dispatch(setSearchTermAction(event.target.value))
  }

  return (
    <MainPage
      searchTerm={searchTerm}
      requestRobots={requestRobots}
      onRequestRobots={onRequestRobots}
      onSearchTermChange={onSearchTermChange}
    />
  )
}

export default App
