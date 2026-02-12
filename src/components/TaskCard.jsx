import React from 'react'
import Column from './Column'

const TaskCard = () => {
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