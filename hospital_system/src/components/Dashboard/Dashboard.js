import React from 'react'
import ViewDoctors from '../AdminRoutes/DoctorRoutes/ViewDoctors'
import Content from './AdminDash/Content'
import Sidebar from './AdminDash/Sidebar'


function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Dashboard