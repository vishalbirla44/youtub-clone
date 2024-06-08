import React, { useState } from 'react'
import Navbar from './componants/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
const App = () => {

  const [sidebar,setsidebar] = useState(true)
  return (
    <div>
        <Navbar setsidebar={setsidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Routes>
    </div>
  )
}

export default App