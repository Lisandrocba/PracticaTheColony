import React from 'react'
import './style.css'

const Item = ({item}) => {
  return (
    <div className='contenedor'>
      <div>{item.name}</div>
    </div>
  )
}

export default Item
