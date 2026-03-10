import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonsList from './ButtonsList'

const MainContainer = ({search}) => {
  console.log('MC', search)
  return (
    <div className='p-4'>
        <ButtonsList />
        <VideoContainer search={search}/>
      
    </div>
  )
}

export default MainContainer
