import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import AdminLogin from './components/Log In pages/AdminLogin';
import DoctorLogin from './components/Log In pages/DoctorLogin';
import StaffLogin from './components/Log In pages/StaffLogin';
import LandingPage from './components/LandingPage/LandingPage';
import ViewDoctors from './components/AdminRoutes/DoctorRoutes/ViewDoctors';
import Content from './components/Dashboard/AdminDash/Content';


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
            <Route path='doctors' element={<ViewDoctors />} />
            </Route>
          <Route path="/" exact element={<LandingPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
