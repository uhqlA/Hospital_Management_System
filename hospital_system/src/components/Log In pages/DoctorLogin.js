import React, {useState} from 'react'
import './loginStyle.css'

const DoctorLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setbtnDisabled] = useState();
    const [error, setError] = useState("");


    const handleUsernameChange =(e) =>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!username || !password){
            setbtnDisabled(true);
            setError('Make sure all the fields are filled')
        } else if (username && username.trim().length<4){
            setbtnDisabled(true);
            setError('Enter a Valid username');
        }else if (!strongRegex.test(password)){
            setbtnDisabled(true);
            setError('Enter a valid password');
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
                                        <input required type="text" className="input" placeholder='Enter Username' onChange={handleUsernameChange} value={username} />
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input required type="password" className="input" placeholder='Enter Password' onChange={handlePasswordChange} value={password}/>
                                    </div>
                                    {error? <p className='passerr'>{error}</p> :  null} 
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