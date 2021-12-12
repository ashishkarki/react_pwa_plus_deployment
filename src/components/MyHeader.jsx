import React from 'react'

function MyHeader({ title = 'RoboFriends' }) {
  console.log('MyHeader.render()')
  return <h1 className="f1">{title}</h1>
}

export default React.memo(MyHeader)
