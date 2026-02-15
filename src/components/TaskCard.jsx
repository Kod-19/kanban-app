import React from 'react'
import Column from './Column'

const TaskCard = () => {

    const [tasks, setTasks] = React.useState([]) //tis will serve as a storage for all tasks created by the user

    const [inputValue, setInputValue] = React.useState('') //this will store the value of the input field

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-3 gap-7'>
                <Column title='To Do' />
                <Column title='In Progress' />
                <Column title='Done' />
            </div>
        </div>
    )
}

export default TaskCard