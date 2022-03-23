import React, {useEffect} from 'react'
import Sidebar from './AdminDash/Sidebar'
import {BrowserRouter,Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminLogin from '../Log In pages/AdminLogin'


function Dashboard() {
  const navigate = useNavigate

  // useEffect(()=>{
  //   fetchUser();
  //   }, [])  

  // const fetchUser = async ()=>{
  //   try {
  //     const {data} = await axios.get('/currentUser');
  //     console.log(data)
  //     if (data.status === 403) navigate('/')
  //   } catch (error) {
  //     if (error) console.log('Error occured when trying to fetch users', error)
  //   }
  // }



  return ( 
    <div className='dashboard-container'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard