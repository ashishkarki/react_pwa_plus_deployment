import React from 'react'
import glamorous from 'glamorous'
import Card from '../Card/Card'

const CardListDiv = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
  padding: '0',
  '@media (min-width: 768px)': {
    width: '80%',
  },
  '@media (min-width: 1024px)': {
    width: '60%',
  },
})

const CardList = ({ robots }) => {
  console.log('CardList')
  return (
    <CardListDiv>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        )
      })}
    </CardListDiv>
  )
}

export default CardList
