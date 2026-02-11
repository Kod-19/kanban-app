import React from 'react'
import circle from '../assets/unchecked_btn.png'

const Column = ({ title }) => {
  return (
    <div className='bg-sky-100 rounded-md p-4 m-4 w-80 shadow-md'>
      <div className='flex items-center gap-2 mb-4'>
        <h3 className='text-lg font-medium'>{title}</h3>
        <img src={circle} alt="check mark" className='w-6 h-6' />
      </div>
    </div>
  )
}

export default Column