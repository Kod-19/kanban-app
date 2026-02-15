import React from 'react'
import circle from '../assets/unchecked_btn.png'

const Column = ({title}) => {
  return (
    <div className='bg-gray-200 rounded-md h-150'>
      <h3 className='font-semibold text-lg p-4'>{title}</h3>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} //the onChange event handler updates the inputValue state whenever the user types in the input field
        placeholder='Add a new task...'
      />
    </div>
  )
}

export default Column