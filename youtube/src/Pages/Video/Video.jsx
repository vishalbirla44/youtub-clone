import React from 'react'
import './Video.css'
import PlayVIdeo from '../../componants/PlayVideo/PlayVIdeo'
import Recommended from '../../componants/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId, categouryId} = useParams()
  return (
    <div className='play-container'>
      <PlayVIdeo videoId={videoId} categouryId={categouryId}/>
      <Recommended/>
    </div>
  )
}

export default Video