import React from 'react'
import { Outlet } from 'react-router'
import './AuthLayout.css'

export const AuthLayout = () => {
  return (
    <div id='body'>
        <header>
          <a className='home' href='/home'>Home</a>
          <h1>to-do-list ayyub</h1>
          <div className='btn'>
            <a className='login' href='/login'>login</a>
            or
            <a className='regist' href='/registration'>registration</a>
          </div>          
        </header>
        <Outlet />
    </div>
  )
}