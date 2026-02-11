import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Header = () => {
  return (
    <div className='mb-6 w-full'>
      <div className='flex items-center gap-4 w-full'>
        <img
          src={todo_icon}
          alt="todo icon"
          className='w-12 h-12'
        />
        <h1 className='text-3xl'>Kanban Todo App</h1>
        <button className='ml-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Add Task</button>
      </div>
      <p className='text-left text-lg italic mt-2'>Organize your tasks with drag and drop.</p>
    </div>
  )
}

export default Header