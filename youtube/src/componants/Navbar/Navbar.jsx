import React from 'react'
// import Navbar from './componants/Navbar/Navbar'
import menu_icon from '../../assets/menu.png'
import Logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import uplode_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import profille_icon from '../../assets/user_profile.jpg'
import notificatio_icon from '../../assets/notification.png'

const App = () => {
  return (
  
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <img src={menu_icon} className='menu-icon' />
          <img src={Logo} className='Logo' />
        </div>

        <div className='nav-middle flex-div'>
          <input type="text" placeholder='search' />
          <img src={search_icon} alt="" />
        </div>

        <div className='nav-right flex-div'>
          <img src={uplode_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notificatio_icon} alt="" />
          <img src={profille_icon} alt="" className='user-icon' />

        </div>


      </nav>
    
  )
}

export default App