import React from 'react';
import './Home.css'

export const Home = () => {
  return (
    <div>
        <h1>todolist ayyub</h1>
        <hr></hr>
        <aside>
            <nav>
                <a href='-'>profile</a>
                <a href='-'>all task</a>
                <a href='-'>complete task</a>
                <a href='/login'>logout</a>
            </nav>
        </aside>
        <form>
            <input type='text' />
            <input type='submit'/>
        </form>
        <section>
            <ul>
                <li>task 1</li>
            </ul>
        </section>
        <footer>made by ayyub</footer>
    </div>
  )
}
