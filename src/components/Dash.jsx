import { ChevronDown, TrendingDown, TrendingUp } from 'lucide-react'
import React, { useContext } from 'react'
import FeeChart from '../charts/FeeChart'
import Attendance from './Attendance'
import IncomeChart from '../charts/IncomeChart'
import ExpenseChart from '../charts/ExpenseChart'
import { MyThemeContext } from '../context/ThemeContext'

const Dash = () => {
    const {theme} = useContext(MyThemeContext)
  return (
    <div className='w-full space-y-4'>
      <div className='w-full flex flex-row items-center justify-between'>
        <p className={`${theme === "dark"?"text-white":"text-black"} text-sm`}>Overview</p>
        <div className='flex flex-row items-center'>
          <p className={`${theme === "dark"?"text-white":"text-black"} text-sm`}>Today</p>
          <ChevronDown size={15} className='text-neutral-400' />
        </div>
      </div>

      {/* stats */}
      <div className='w-full grid grid-cols-4 gap-4'>
        <div className='w-full h-32 rounded-3xl bg-violet-100 flex flex-col justify-center items-start px-5 space-y-2'>
          <p className='text-md'>Pending Fees</p>
          <div className='w-full flex-row flex items-center space-x-5'>
            <p className='font-semibold text-2xl'>7,234</p>
            <div className='flex flex-row items-center space-x-2'>
              <p className='text-xs'>+11.5</p>
              <TrendingUp size={15} className='' />
            </div>
          </div>
        </div>
        <div className='w-full h-32 rounded-3xl bg-blue-100 flex flex-col justify-center items-start px-5 space-y-2'>
          <p className='text-md'>Visitors</p>
          <div className='w-full flex-row flex items-center space-x-5'>
            <p className='font-semibold text-2xl'>0005</p>
            <div className='flex flex-row items-center space-x-2'>
              <p className='text-xs'>-0.5</p>
              <TrendingDown size={15} className='' />
            </div>
          </div>
        </div>
        <div className='w-full h-32 rounded-3xl bg-violet-100 flex flex-col justify-center items-start px-5 space-y-2'>
          <p className='text-md'>Staff</p>
          <div className='w-full flex-row flex items-center space-x-5'>
            <p className='font-semibold text-2xl'>156</p>
            <div className='flex flex-row items-center space-x-2'>
              <p className='text-xs'>+11.5</p>
              <TrendingUp size={15} className='' />
            </div>
          </div>
        </div>
        <div className='w-full h-32 rounded-3xl bg-blue-100 flex flex-col justify-center items-start px-5 space-y-2'>
          <p className='text-md'>Students</p>
          <div className='w-full flex-row flex items-center space-x-5'>
            <p className='font-semibold text-2xl'>2,345</p>
            <div className='flex flex-row items-center space-x-2'>
              <p className='text-xs'>+6.5</p>
              <TrendingUp size={15} className='' />
            </div>
          </div>
        </div>
      </div>

      {/* Fees graph */}
      <div className='w-full flex flex-row space-x-5 justify-between'>
        <div className='w-[70%]'>
          <FeeChart />
        </div>
        <div className='w-[25%]'>
          <Attendance />
        </div>
      </div>


      {/* income graph */}
      <div className="w-full gap-4 grid grid-cols-2">
        <div className="w-full">
            <IncomeChart/>
        </div>
        <div className="w-full">
            <ExpenseChart/>
        </div>
      </div>
    </div>
  )
}

export default Dash
