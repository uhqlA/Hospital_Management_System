import React, {useState} from 'react'
import './loginStyle.css'

const DoctorLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setbtnDisabled] = useState();


    const handleUsernameChange =(e) =>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e)=>{
        if(!username || !password){
            setbtnDisabled(true);
            alert('Make sure all the fields are filled')
        } else if (username && username.trim().length<4){
            setbtnDisabled(true);
            alert('Enter a Valid username');
        }else if (password && password.trim().length<8){
            setbtnDisabled(true);
            alert('Check Password');
        } else {
            e.preventDefault();
            alert ('Submitted successfully');
        }

    }

    return (
        <div>
            <img className="wave" src="../assets/LoginImages/bg.png" alt='wave'/>
                <div className="container">
                    <div className="img">
                        <img src="../assets/LoginImages/doctor2.svg" alt='logo' />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src="../assets/LoginImages/avatar.svg" alt='avatar'/>
                                <h3 className="title">Doctor Login</h3>
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <input type="text" className="input" placeholder='Enter Username' onChange={handleUsernameChange} value={username} />
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input type="password" className="input" placeholder='Enter Password' onChange={handlePasswordChange} value={password}/>
                                    </div>
                                </div>
                                <p>Forgot password?</p>
                                <input type="submit" className="btn" value="Login" disabled={btnDisabled} />
                        </form> 
                    </div>
                </div>
         </div>
                )
}

                export default DoctorLogin