import React from 'react'
import Column from './Column'

const TaskCard = () => {
    return (
        <div className='mt-10'>
            <div className='grid grid-cols-3 gap-4'>
                <Column title='To Do' todo={} />
                <Column title='In Progress' todo={} />
                <Column title='Done' todo={} />
            </div>
        </div>
    )
}

export default TaskCard