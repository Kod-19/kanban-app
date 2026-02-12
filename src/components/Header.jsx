import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Header = () => {

  const addTask = () => {
    
  }

  return (
    <>
    <div className='flex justify-between items-center'>
      <div>
        <h3 className='font-bold text-3xl'>Kanban Todo List</h3>
        <p className='font-semibold'>Organize your tasks with drag and drop</p>
      </div>

      <button onClick={addTask} className='bg-black text-white rounded-md px-4 py-2 cursor-pointer'>
        Add Task</button>
    </div>
    </>
  )
}

export default Header