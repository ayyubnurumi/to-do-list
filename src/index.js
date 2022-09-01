import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import Navbar from './todolist/components/Nav/NavBar';
// import App from './App';
// import Login from './todolist/pages/Login/Login';
// import Home from './todolist/pages/Home/Home'
import Task from '../src/todolist/components/Task/Task'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
