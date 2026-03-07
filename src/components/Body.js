import React from 'react'
import ButtonsList from './ButtonsList'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div>
        <h1>Body</h1>
        <div className='flex'>
        <SideBar />
        <MainContainer />
        </div>
        
    </div>
  )
}

export default Body
