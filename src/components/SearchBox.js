import React from 'react'
import glamorous from 'glamorous'

const SearchBoxDiv = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  height: '100%',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  margin: '0.3rem auto',
  padding: '10px',
  boxShadow: '0px 0px 5px #888888',
  '& input': {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em',
    padding: '10px',
    backgroundColor: 'transparent',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
})

const SearchBox = ({ searchChange }) => {
  console.log('SearchBox')
  return (
    <SearchBoxDiv className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </SearchBoxDiv>
  )
}

export default SearchBox
