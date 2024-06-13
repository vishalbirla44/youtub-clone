import React from 'react'
import './Home.css'
import Sidebar from '../../componants/Sidebar/Sidebar'
import Feed from '../../componants/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar? "" : 'large-container'}`}>
      <Feed/>
    </div>
    </>

    
  )
}

export default Home