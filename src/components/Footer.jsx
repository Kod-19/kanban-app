import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 flex justify-center items-center bg-gray-700 py-10 text-white'>
        <p className=''>© {new Date().getFullYear()} Kwame Dawson. All rights reserved.</p>
    </div>  
  )
}

export default Footer