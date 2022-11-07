import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faCircle } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router'
import './Layout.css'

export const Layout = () => {
  const navigate = useNavigate()
  const [open, setopen] = useState(false);
  const handleOpen = () => {setopen(!open)};
  const toProfile = () => {navigate('profile'); setopen(false)}
  const logout = () => {localStorage.removeItem('userCredentials'); setopen(false); navigate('login')}
  return (
    <div id='body'>
        <header id='header'>
          <h1 id='title'><a className='link' href='home'>to-do-list ayyub</a></h1>
          <button className='account' onClick={handleOpen}><FontAwesomeIcon className='icon' icon={faUserAstronaut} mask={faCircle} size='3x' /></button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button onClick={toProfile}>profile</button>
              </li>
              <li className="menu-item">
                <button onClick={logout}>logOut</button>
              </li>
            </ul>
          ) : null}
        </header>
        <Outlet />
        <footer id='footer'>made by ayyub</footer>
    </div>
  )
}