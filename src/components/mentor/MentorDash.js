import React from 'react'
import MentorSidebar from './MentorSidebar'
import stud from './assets/student.png'
import task from './assets/task.png'
import time from './assets/time.png'
import ti from './assets/ti.png'

export default function MentorDash() {
  return (
    <div>
      <div><MentorSidebar /></div>
      <div className='h-screen pl-80 pt-20'>
        <div className='h-5/6 w-90 m-10'>
          <div className='w-full h-full flex flex-row'>
            <div className='w-1/2 h-full'>


              <div className='w-full h-1/2 overflow-hidden border border-black'>
                {/* Enroll student div */}
                <div className='w-1/3 h-1/2 float-left flex justify-center items-center'>
                  <img className='w-30 pt-20' src={stud} alt="" />
                </div>
                <div className='w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center'>
                  <h1 className='font-bold text-2xl'>Enrolled Students</h1>
                  <span className='font-bold text-2xl pt-10 text-center'>15</span>
                </div>
              </div>

              <div className='w-full h-1/2 overflow-hidden  border border-black'>
                {/* Enroll student div */}
                <div className='w-1/3 h-1/2 float-left flex justify-center items-center'>
                  <img className='w-30 pt-20' src={ti} alt="" />
                </div>
                <div className='w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center'>
                  <h1 className='font-bold text-2xl'>Students Time (Avg.)</h1>
                  <span className='font-bold text-2xl pt-10 text-center'>15 Hours</span>
                </div>
              </div>


            </div>
            <div className='w-1/2 h-full'>

              <div className='w-full h-1/2 overflow-hidden  border border-black'>
                {/* Enroll student div */}
                <div className='w-1/3 h-1/2 float-left flex justify-center items-center'>
                  <img className='w-30 pt-20' src={time} alt="" />
                </div>
                <div className='w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center'>
                  <h1 className='font-bold text-2xl'>Last Task on</h1>
                  <span className='font-bold text-2xl pt-10 text-center'>20th March, 2023</span>
                </div>
              </div>

              <div className='w-full h-1/2 overflow-hidden -100 border border-black'>
                {/* Enroll student div */}
                <div className='w-1/3 h-1/2 float-left flex justify-center items-center'>
                  <img className='w-30 pt-20' src={task} alt="" />
                </div>
                <div className='w-2/3 h-1/2 pt-20 float-left flex flex-col justify-center items-center'>
                  <h1 className='font-bold text-2xl'>Total Tasks Given</h1>
                  <span className='font-bold text-2xl pt-10 text-center'>56</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
