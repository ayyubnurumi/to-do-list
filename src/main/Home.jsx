import React from 'react';
import { Outlet } from 'react-router';
import './Home.css'

export const Home = () => {

    const logout = () => localStorage.removeItem('userCredentials')
  return (
    <div>
        <h1 className='layout-header'>todolist ayyub</h1>
        <hr></hr>
        <div className='layout'>
            <aside>
                <nav>
                    <a href='profile'>profile</a>
                    <a href='home'>all task</a>
                    <a href='complete-task'>complete task</a>
                    <a href='login' onClick={logout}>logout</a>
                </nav>
            </aside>
            <section>
                <Outlet />
            </section>
        </div>
        <footer>made by ayyub</footer>
    </div>
  )
}
