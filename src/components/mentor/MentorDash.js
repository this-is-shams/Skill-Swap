import React from 'react'
import MentorSidebar from './MentorSidebar'

export default function MentorDash() {
  return (
    <div>
      <div><MentorSidebar /></div>
      <div className='h-screen pl-80 pt-20 bg-yellow-300'>
        <div className='h-5/6 bg-blue-300 w-90 mr-20 flex'>
          <div className='h-full flex-col'>
            <div className='w-1/2 h-1/2 bg-green-300'>
              <h1>Total Students1</h1>
            </div>
            <div className='w-1/2 h-1/2 bg-red-300'>
              <h1>Total Students2</h1>
            </div>
          </div>
          <div className='h-full flex-col'>
            <div className='w-1/2 h-1/2 bg-green-300'>
              <h1>Total Students3</h1>
            </div>
            <div className='w-1/2 h-1/2 bg-red-300'>
              <h1>Total Students4</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
