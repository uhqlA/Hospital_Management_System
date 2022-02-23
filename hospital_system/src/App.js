import './App.css';
import AdminLogin from './components/Log In pages/AdminLogin';
import DoctorLogin from './components/Log In pages/DoctorLogin';
import StaffLogin from './components/Log In pages/StaffLogin';
import StraffLogin from './components/Log In pages/StaffLogin';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  <div>
    <Navbar />
    <DoctorLogin />
  </div>
  );
}

export default App;
