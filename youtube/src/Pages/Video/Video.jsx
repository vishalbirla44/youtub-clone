import React from 'react'
import './Video.css'
import PlayVIdeo from '../../componants/PlayVideo/PlayVIdeo'
import Recommended from '../../componants/Recommended/Recommended'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVIdeo/>
      <Recommended/>
    </div>
  )
}

export default Video