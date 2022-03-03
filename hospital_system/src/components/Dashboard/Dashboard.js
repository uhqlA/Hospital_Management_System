import React from 'react'
import Sidebar from './AdminDash/Sidebar'
import {BrowserRouter,Routes, Route, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard