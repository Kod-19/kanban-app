import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Header = () => {
  return (
    <>
    <div className='flex '>
      <div className=''>
      <h3 className='font-bold text-3xl'>Kanban Todo List</h3>
      <p className='font-semibold'>Organize your tasks with drag and drop</p>
      </div>

      <button className='bg-black text-white rounded-md px-4 py-0.5'>Add Task</button>
    </div>
    </>
  )
}

export default Header