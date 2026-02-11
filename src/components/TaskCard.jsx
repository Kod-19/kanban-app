import React from 'react'
import Column from './Column'

const TaskCard = () => {
    return (
        <div className='mt-8 w-full'>
            <div className='grid grid-cols-3 gap-4 w-full'>
                <Column title='To Do' />
                <Column title='In Progress' />
                <Column title='Done' />
            </div>
        </div>
    )
}

export default TaskCard