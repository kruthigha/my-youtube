import React from 'react';

const Video = ({info}) => {
  if (!info) return null;
    console.log(info)
  const  {snippet, statistics}=info
  const  {thumbnails,channelTitle,title } = snippet
    
  return (
    <div className='w-80 shadow-lg m-4'>
        <img src={thumbnails.medium.url} alt='thumbnail' className='w-80'/>
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
            <li>{Math.ceil(statistics.likeCount/1000)}k Likes</li>
        </ul>
      
    </div>
  )
}

export const AdVideo = ({info}) => {
  return <div className= 'border border-red-700'>
    <Video info={info}/>
  </div>
}

export default Video;
