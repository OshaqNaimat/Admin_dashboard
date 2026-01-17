import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Table from './components/Table'
import Charts from './components/Charts'

const page = () => {
  return (
    <div className='grid grid-cols-12 bg-[#151C2D] '>
      <Sidebar/>
      <div className='col-span-10 overflow-y-scroll h-screen mb-10'>
      <Navbar/>
      <Card/>
      <Table/>
      <Charts/>
      </div>
          </div>
  )
}

export default page
