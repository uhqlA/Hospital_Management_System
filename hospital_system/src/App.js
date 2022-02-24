import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import AdminLogin from './components/Log In pages/AdminLogin';
import DoctorLogin from './components/Log In pages/DoctorLogin';
import StaffLogin from './components/Log In pages/StaffLogin';
import StraffLogin from './components/Log In pages/StaffLogin';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        
        <Route path='/doctorslogin' element={<DoctorLogin />} />
        <Route path='/stafflogin' element={<StaffLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
