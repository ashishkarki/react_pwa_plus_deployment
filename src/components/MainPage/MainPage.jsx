import React, { useEffect } from 'react'

import './MainPage.css'
import CardList from '../CardList/CardList'
import MyHeader from '../MyHeader'
import SearchBox from '../SearchBox'
import Scroll from '../Scroll'
import ErrorBoundary from '../ErrorBoundary'

export const MainPage = ({
  searchTerm,
  requestRobots,
  onRequestRobots,
  onSearchTermChange,
}) => {
  const { isPending, robots } = requestRobots

  useEffect(() => {
    console.log('MainPage.js useEffect, disptaching action to fetch robots')
    onRequestRobots()
  }, [])

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <MyHeader />
      <SearchBox searchChange={onSearchTermChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList id="cardList" robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
}

export default MainPage
