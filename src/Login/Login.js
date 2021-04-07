import React, { useState } from 'react';
import './Login.css';
import Register from '../Register/Register';

const Login = () => {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  const onClickRegister = () => {
    setRegisterFormOpen(!registerFormOpen);
  }

  return (
    <React.Fragment>
      <form action="">
        <div className="form-input-box">
          <label htmlFor="login-email">Email</label>
          <input type="email" name="login-email" id="login-email" required autoFocus />
        </div>
        <div className="form-input-box">
          <label htmlFor="login-password">Password</label>
          <input type="password" name="login-password" id="login-password" required />
        </div>
        <input type="checkbox" name="remember" id="remember"></input>
        <label className="remember" htmlFor="remember">Remember</label>
        <button type="submit">Sign On</button>
      </form>
      <div className="register-links">
        <p onClick={onClickRegister}>Register</p>
        <span>|</span>
        <p >Forgot Password?</p>
      </div>
      <div className={`${registerFormOpen ? "" : "hidden"}`}>
        <Register onClickOutside={setRegisterFormOpen} />
      </div>
    </React.Fragment>
  );
}

export default Login;