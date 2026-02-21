import React from 'react'
import circle from '../assets/unchecked_btn.png'

const Column = ({title}) => {
  return (
    <div className='bg-gray-200 rounded-md h-150'>
      <h3 className='font-semibold text-lg p-4'>{title}</h3>
    </div>
  )
}

export default Column