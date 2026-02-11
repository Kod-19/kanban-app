import React from 'react'
import circle from '../assets/unchecked_btn.png'

const Column = ({ title, todo }) => {
  return (
    <div className=''>
      <h3 className='font-semibold text-lg'>{title}</h3>
      <div className='bg-gray-200'>
        <ul>
          <li>{todo}</li>
          <li>{todo}</li>
          <li>{todo}</li>
        </ul>
      </div>
    </div>
  )
}

export default Column