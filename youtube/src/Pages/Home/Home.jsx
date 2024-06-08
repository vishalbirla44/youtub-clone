import React from 'react'
import './Home.css'
import Sidebar from '../../componants/Sidebar/Sidebar'

const Home = ({sidebar}) => {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default Home