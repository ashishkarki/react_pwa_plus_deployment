import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { requestRobotsAction, setSearchTermAction } from '../actions'
import MyHeader from '../components/MyHeader'

export const App = () => {
  const { searchTerm } = useSelector((state) => state.searchTerm)
  const requestRobots = useSelector((state) => state.requestRobots)
  const dispatch = useDispatch()

  const onRequestRobots = useCallback(() => dispatch(requestRobotsAction(), []))

  const onSearchTermChange = (event) => {
    dispatch(setSearchTermAction(event.target.value))
  }

  useEffect(() => {
    console.log('App.js useEffect, disptaching action')
    onRequestRobots()
  }, [])

  const filteredRobots = requestRobots.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return requestRobots.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <MyHeader />
      <SearchBox searchChange={onSearchTermChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

export default App
