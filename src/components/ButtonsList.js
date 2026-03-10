import React from 'react'
import Buttons from './Buttons'
const names= ["All", "Music", "News", "TamilCinema", "Jukebox", "Podcasts", "1990s" , "Live" , "Dramedy", "Gaming", "Raga", "Playlists", "Meditation", "Programming"]

const ButtonsList = () => {
  return (
    <div className='flex'>
      {names.map((name)=> {
        return <Buttons name={name}/>
      })}
    </div>
  )
}

export default ButtonsList
