import React from 'react'

export const ListItem = ({name,rating}) => {
  return (
    <div className="container container-center border">
        <div className='text-lg'>Movie Name: {name}</div>
        <div className='text-sm'>IMDb Rating: {rating}</div>
    </div>
  )
}
