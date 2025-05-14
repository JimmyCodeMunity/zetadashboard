import React, { useContext, useState } from 'react'
import * as Icon from 'react-feather'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Globe,
  MessagesSquare,
  Moon,
  MoonIcon,
  SidebarClose,
  SidebarOpen,
  Sun,
  User
} from 'lucide-react'
import { MyThemeContext } from '../context/ThemeContext'

const Navbar = ({ pagetitle }) => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const { theme, toggleTheme } = useContext(MyThemeContext)
  return (
    <div
      className={`w-full py-8 ${
        theme === 'dark' ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-100'
      } border  border-l-0 border-r-0 border-t-0 md:px-16 px-6`}
    >
      <div className='w-full justify-between flex flex-row items-center'>
        <div className='flex flex-row items-center space-x-5'>
          <SidebarOpen className={`${theme === "dark"?"text-white":"text-black"}`} size={18} />
          <Globe className='text-yellow-500' size={18} />
          <p className='text-blue-500 text-sm'>Active</p>
          <p className='text-neutral-500 text-md'>/</p>
          <p className={`${theme === "dark"?"text-white":"text-black"} text-sm`}>Zeta Smart School</p>
        </div>
        <div className='md:flex hidden flex-row items-center space-x-4'>
          <div className='flex flex-row items-center space-x-4'>
            {theme === 'dark' ? (
              <Sun
                onClick={toggleTheme}
                size={16}
                className={`${
                  theme === 'dark' ? 'text-neutral-100' : 'text-neutral-800'
                }`}
              />
            ) : (
              <MoonIcon
                onClick={toggleTheme}
                size={16}
                className={`${
                  theme === 'dark' ? 'text-neutral-100' : 'text-neutral-800'
                }`}
              />
            )}
            <MessagesSquare
              size={16}
              className={`${
                theme === 'dark' ? 'text-neutral-100' : 'text-neutral-800'
              }`}
            />
            <User
              size={16}
              className={`${
                theme === 'dark' ? 'text-neutral-100' : 'text-neutral-800'
              }`}
            />
            <SidebarClose
              size={16}
              className={`${
                theme === 'dark' ? 'text-neutral-100' : 'text-neutral-800'
              }`}
            />
          </div>
        </div>

        <div className='md:hidden block'>
          <Icon.Menu onClick={handleMenu} className='text-neutral-500' />
        </div>

        {open && (
          <div
            id='menu'
            className='md:hidden w-full h-screen top-0 left-0 fixed'
          >
            <div className='w-80 bg-white h-full'>
              <div className='absolute top-4 rounded-full bg-lime-500 p-4 right-14'>
                <Icon.ChevronLeft
                  onClick={handleMenu}
                  className='text-neutral-500'
                />
              </div>
              <div className='md:hidden w-full'>
                <MobileSidebar />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
