import './App.css';
import React, { Children , useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import AdminLogin from './components/Log In pages/AdminLogin';
import DoctorLogin from './components/Log In pages/DoctorLogin';
import StaffLogin from './components/Log In pages/StaffLogin';
import LandingPage from './components/LandingPage/LandingPage';
import ViewDoctors from './components/AdminRoutes/ViewUsers/ViewDoctors';
import Content from './components/Dashboard/AdminDash/Content';
import CreateDoc from './pages/createDoc';
import ViewEmployees from './components/AdminRoutes/ViewUsers/ViewEmployees';
import ViewPatient from './components/AdminRoutes/ViewUsers/ViewPatients';
import CreateEmployee from './pages/createEmployee';
import CreatePatient from './pages/createPatient';
import UpdateDoc from './pages/updateDoc';
import { useAuth } from './components/context/LoginContext';


export const authContext = React.createContext();

function App() {
const [isAuth, setIsAuth] = useState(false);

const [state, setstate] = useState('');


    localStorage.setItem("isAuth", JSON.stringify(isAuth));

    const saved = localStorage.getItem("isAuth");

  const RequireAuth = ({ children }) => {
    console.log(saved)
    return saved ? children: <Navigate to='/adminlogin' replace/>
  }

  return (
    <div>
      <authContext.Provider value = {[isAuth, setIsAuth]}>
        <BrowserRouter>

          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path='/doctorslogin' element={<DoctorLogin />} />
            <Route path='/stafflogin' element={<StaffLogin />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/admin-dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
              <Route index element={<RequireAuth><Content /></RequireAuth>} />
              <Route path='doctors'>
                <Route path='' element={<RequireAuth><ViewDoctors /></RequireAuth>} index />

              </Route>
              <Route path='employees' element={<RequireAuth><ViewEmployees /></RequireAuth>} />
              <Route path='patients' element={<RequireAuth><ViewPatient /></RequireAuth>} />
            </Route>
            <Route path="updateDoc" element={<RequireAuth><UpdateDoc /></RequireAuth>} />
            <Route path="/create-doctor" element={<RequireAuth><CreateDoc /></RequireAuth>} />
            <Route path="/create-Employee" element={<RequireAuth><CreateEmployee /></RequireAuth>} />
            <Route path="/create-Patient" element={<RequireAuth><CreatePatient /></RequireAuth>} />
          </Routes>

        </BrowserRouter>
      </authContext.Provider>


    </div>
  );
}


export default App;
