import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isToggleMenuOpen = useSelector((store)=> store.app.isToggleMenu);
  return !isToggleMenuOpen ? null : (
    <div className='bg-slate-100 shadow-lg w-48 h-[42rem]'>
        <h1 className='font-bold p-2 m-2'>Home</h1> 
        <ul>
          <li className='p-1 m-1'>Music</li>
          <li className='p-1 m-1'>Shorts</li>
          <li className='p-1 m-1'>Cricket</li>
          <li className='p-1 m-1'>Movies</li>
        </ul>
        <h1  className='font-bold p-2 m-2'>Subscription</h1> 
        <ul>
          <li className='p-1 m-1'>Music</li>
          <li  className='p-1 m-1'>Shorts</li>
          <li className='p-1 m-1'>Cricket</li>
          <li className='p-1 m-1'>Movies</li>
        </ul>
        <h1 className='font-bold p-2 m-2'>Watch Later</h1> 
        <ul>
          <li className='p-1 m-1'>Music</li>
          <li className='p-1 m-1'>Shorts</li>
          <li className='p-1 m-1'>Cricket</li>
          <li className='p-1 m-1'>Movies</li>
        </ul>
    </div>
  )
}

export default SideBar
