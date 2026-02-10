import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Header = () => {
  return (
    <div className='items-center'>
        <img 
        src={todo_icon} 
        alt="todo icon"
        className='mx-auto pt-6' 
        />

        <h1 className='text-3xl text-center mb-5'>Kanban Todo App</h1>
        <p className='text-center text-lg italic'>Organize your tasks with drag and drop.</p>
    </div>
  )
}

export default Header