import React, { useState } from 'react';
import './Login.css';
import Register from '../Register/Register';

const Login = () => {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  const onClickRegister = () => {
    setRegisterFormOpen(true);
  }

  return (
    <React.Fragment>
      <form action="">
        <div className="form-input-box">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required autoFocus />
        </div>
        <div className="form-input-box">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input type="checkbox" name="remember" id="remember"></input>
        <label className="remember" for="remember">Remember</label>
        <button type="submit">Sign On</button>
      </form>
      <div className="register-links">
        <p onClick={onClickRegister}>Register</p>
        <span>|</span>
        <p >Forgot Password?</p>
      </div>
      <div className={`${registerFormOpen ? "" : "hidden"}`}>
        <Register />
      </div>
    </React.Fragment>
  );
}

export default Login;