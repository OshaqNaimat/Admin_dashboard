import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div className='grid grid-cols-12'>
      <Sidebar/>
      <Navbar/>
         
    </div>
  )
}

export default page
