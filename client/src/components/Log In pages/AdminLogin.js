import React, {useState, useContext} from 'react'
import {useNavigate} from  "react-router-dom"
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
import {useAuth}  from '../../components/context/LoginContext';


function AdminLogin() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [passError, setPassError] = useState("");
    const [emailError, setEmailError] = useState("");

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,16})");
    const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$");

    const handleUsernameChange =(e) =>{
        const email= e.target.value;
        let error;
        try {
            setEmail(email)
            if( email && !emailRegex.test(email)) {
                setbtnDisabled(true)
                setEmailError("Invalid Email");
            }else {
                setEmailError('')
                setbtnDisabled(false)
                console.log(email)
            }
        } catch (error) {
            console.log('Error Occureed in the email try-catch', error)
        }
    }

    const handlePasswordChange = (e)=>{
        const value = e.target.value
            setPassword(value)
        if( value && !strongRegex.test(value)) {        
            setbtnDisabled(true)
            setPassError("Check your password");
        }else {
            setPassError('')
            setbtnDisabled(false)
            console.log(value)
        }
    }

    //login component
    const navigate= useNavigate();
    const {login} = useAuth()
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const {data} = await axios.post('/loginUsers', {
            email: email,
            password: password
        })
                   
         if(data.token && data.role === 30303){
            try {
                login().then(()=>{
                    navigate("/admin-dashboard")
                 })
            } catch (error) {
                if(error) console.log('Error occurred in the Login component'. error)
            }
         } else {
            //alert to show user might be using the wrong Authentication page
         }
    }



    return (
        <div>
            <Navbar />
            <img className="wave" src="../assets/LoginImages/bg.png" alt='wave'/>
                <div className="container">
                    <div className="img">
                        <img src="../assets/LoginImages/doctor2.svg" alt='logo' />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src="../assets/LoginImages/avatar.svg" alt='avatar'/>
                                <h3 className="title">Admin Login</h3>
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <input required type="email" className="input" placeholder='Enter Email' onChange={handleUsernameChange} value={email} />
                                    </div>
                                    {emailError && <small className='err'>{emailError}</small>} 
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input required type="password" className="input" placeholder='Enter Password' onChange={handlePasswordChange} value={password}/>
                                    </div>
                                    {passError &&  <small className='err'>{passError}</small>} 
                                </div>
                                <p>Forgot password?</p>
                                
                                
                                <input type="submit" className="btn" value="Login" disabled={btnDisabled} />
                                
                            
                                                       
                        </form> 
                    </div>
                </div>
         </div>
                )
}

export default AdminLogin