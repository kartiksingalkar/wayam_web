import React from 'react'
import logo from '../Images/wayamLogo.png'
import user from '../Images/profile.png'
import bell from '../Images/notification.png'
import '../CSS/Header.css'

export default function Header(props) {
  return (
    <div>
        <div className='header1'>
            <img className='logo' src={logo} alt='logo' onClick={props.click}/>
            <img className='icon1' src={bell} alt='icon1' onClick={props.click}/>
            <img className='icon2' src={user} alt='icon2' onClick={props.click}/>
        </div>
    </div>
  )
}
