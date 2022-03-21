import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/doctorslogin' element={<DoctorLogin />} />
          <Route path='/stafflogin' element={<StaffLogin />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admin-dashboard' element={<Dashboard />}>
            <Route index element={<Content />} />
            <Route path='doctors'>
              <Route path='' element={<ViewDoctors />} index />
              
            </Route>
            <Route path='employees' element={<ViewEmployees />} />
            <Route path='patients' element={<ViewPatient />} />
          </Route>
          <Route path="updateDoc" element={<UpdateDoc />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/create-doctor" element={<CreateDoc />} />
          <Route path="/create-Employee" element={<CreateEmployee />} />
          <Route path="/create-Patient" element={<CreatePatient />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
