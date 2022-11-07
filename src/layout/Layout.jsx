import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Outlet } from 'react-router'
import './Layout.css'

export const Layout = () => {
  const logout = () => localStorage.removeItem("userCredentials");
  return (
    <div id='body'>
        <header id='header'>
          <h1 id='title'><a className='link' href='home'>to-do-list ayyub</a></h1>
          <button className='account' onClick={logout}><FontAwesomeIcon className='icon' icon={faUserAstronaut} mask={faCircle} size='3x' /></button>                
        </header>
        <Outlet />
        <footer id='footer'>made by ayyub</footer>
    </div>
  )
}