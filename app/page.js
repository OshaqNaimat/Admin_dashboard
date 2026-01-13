import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Card from './components/Card'

const page = () => {
  return (
    <div className='grid grid-cols-12 bg-[#151C2D] '>
      <Sidebar/>
      <div className='col-span-10'>
      <Navbar/>
      </div>
          </div>
  )
}

export default page
