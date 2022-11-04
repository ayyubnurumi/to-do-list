import React from 'react'
import { Outlet } from 'react-router'
import './Layout.css'

export const Layout = () => {
  return (
    <div id='body'>
        <header id='header'>
          <h1 id='title'><a className='link' href='home'>to-do-list ayyub</a></h1>
          <select>
            <option></option>
          </select>
          <a className='link account' href='profile'>account</a>
        </header>
        <Outlet />
        <footer id='footer'>made by ayyub</footer>
    </div>
  )
}