import React from 'react'

function StaffLogin() {
  return (
    <div>
      <img className="wave" src="../assets/LoginImages/bg.png" alt='wave' />
      <div className="container">
        <div className="img">
          <img src="../assets/LoginImages/doctor2.svg" alt='logo' />
        </div>
        <div className="login-content">
          <form>
            <img src="../assets/LoginImages/avatar.svg" alt='avatar' />
            <h3 className="title">Staff Login</h3>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" className="input" />
              </div>
            </div>
            <p>Forgot password?</p>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div></div>
  )
}

export default StaffLogin