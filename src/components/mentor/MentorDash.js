import React from 'react'
import MentorSidebar from './MentorSidebar'

export default function MentorDash() {
  return (
    <div>
      <div><MentorSidebar /></div>
      <div className='h-screen pl-80 pt-20 bg-yellow-300'>
        <div className='h-5/6 bg-blue-300 w-90 m-10'>
          <div className='w-full h-full flex flex-row'>
            <div className='w-1/2 h-full'>
              <div className='w-full h-1/2 bg-green-300'><h1>Total Enrolled Student</h1></div>
              <div className='w-full h-1/2 bg-red-300'><h1>Class2</h1></div>
            </div>
            <div className='w-1/2 h-full'>
              <div className='w-full h-1/2 bg-red-300'><h1>Class3</h1></div>
              <div className='w-full h-1/2 bg-green-300'><h1>Class4</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
