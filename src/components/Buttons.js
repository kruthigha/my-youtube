import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
      <button className='p-2 m-2 bg-slate-200 text-black hover:bg-black  hover:text-white cursor-pointer rounded-lg'>{name}</button>
    </div>
  )
}

export default Buttons
